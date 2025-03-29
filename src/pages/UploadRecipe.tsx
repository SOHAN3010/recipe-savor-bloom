import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { difficulties, mealTimes, Recipe } from "@/data/recipes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

const placeholderImage = "/placeholder.svg";

// Define the allowed values for mealTime and difficulty
type MealTimeType = "Breakfast" | "Lunch" | "Dinner" | "Snack" | "Dessert";
type DifficultyType = "Easy" | "Medium" | "Hard";

const UploadRecipe = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    customCategory: "",
    category: "",
    mealTime: "" as MealTimeType | "",
    difficulty: "" as DifficultyType | "",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    ingredients: [] as string[],
    steps: [] as string[],
    imageUrl: placeholderImage,
  });
  
  const [imagePreview, setImagePreview] = useState(placeholderImage);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [currentStep, setCurrentStep] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    if (name === "mealTime") {
      // Validate mealTime
      if (mealTimes.filter(t => t !== "All").includes(value as MealTimeType)) {
        setFormData({ ...formData, [name]: value as MealTimeType });
      }
    } else if (name === "difficulty") {
      // Validate difficulty
      if (difficulties.filter(d => d !== "All").includes(value as DifficultyType)) {
        setFormData({ ...formData, [name]: value as DifficultyType });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) || 0 });
  };
  
  const handleAddIngredient = () => {
    if (currentIngredient.trim()) {
      setFormData({
        ...formData,
        ingredients: [...formData.ingredients, currentIngredient.trim()],
      });
      setCurrentIngredient("");
    }
  };
  
  const handleRemoveIngredient = (index: number) => {
    const newIngredients = [...formData.ingredients];
    newIngredients.splice(index, 1);
    setFormData({ ...formData, ingredients: newIngredients });
  };
  
  const handleAddStep = () => {
    if (currentStep.trim()) {
      setFormData({
        ...formData,
        steps: [...formData.steps, currentStep.trim()],
      });
      setCurrentStep("");
    }
  };
  
  const handleRemoveStep = (index: number) => {
    const newSteps = [...formData.steps];
    newSteps.splice(index, 1);
    setFormData({ ...formData, steps: newSteps });
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        setFormData({ ...formData, imageUrl: result });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const getFinalCategory = () => {
    // If user provided a custom category, use it; otherwise use the selected one
    return formData.customCategory.trim() || formData.category;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title.trim()) {
      toast.error("Please provide a recipe title");
      return;
    }
    
    if (!getFinalCategory()) {
      toast.error("Please select or enter a category");
      return;
    }
    
    if (!formData.mealTime) {
      toast.error("Please select a meal time");
      return;
    }
    
    if (!formData.difficulty) {
      toast.error("Please select a difficulty level");
      return;
    }
    
    if (formData.ingredients.length === 0) {
      toast.error("Please add at least one ingredient");
      return;
    }
    
    if (formData.steps.length === 0) {
      toast.error("Please add at least one step");
      return;
    }
    
    // Create the recipe object
    const newRecipe: Recipe & { rating?: number, userId?: string } = {
      id: uuidv4(),
      title: formData.title,
      description: formData.description,
      category: getFinalCategory(),
      mealTime: formData.mealTime as MealTimeType,
      difficulty: formData.difficulty as DifficultyType,
      prepTime: formData.prepTime,
      cookTime: formData.cookTime,
      servings: formData.servings,
      ingredients: formData.ingredients,
      steps: formData.steps,
      instructions: formData.steps, // Map steps to instructions
      imageUrl: formData.imageUrl,
      likes: 0,
      featured: false,
      rating: 0,
      userId: "user", // Mark this as a user-created recipe
    };
    
    // Get existing user recipes from localStorage
    const existingUserRecipes = JSON.parse(localStorage.getItem("userRecipes") || "[]");
    
    // Add the new recipe
    const updatedUserRecipes = [...existingUserRecipes, newRecipe];
    
    // Save to localStorage
    localStorage.setItem("userRecipes", JSON.stringify(updatedUserRecipes));
    
    // Show success message
    toast.success("Recipe uploaded successfully!");
    
    // Navigate to the home page
    navigate("/");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-recipe-secondary mb-8">
            Upload Your Recipe
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-recipe-secondary">
                Basic Information
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Recipe Title*</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter recipe title"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your recipe"
                    rows={3}
                  />
                </div>
              </div>
            </div>
            
            {/* Category and Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-recipe-secondary">
                Recipe Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Select Category</Label>
                  <Select
                    name="category"
                    onValueChange={(value) => handleSelectChange("category", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Main Dish">Main Dish</SelectItem>
                      <SelectItem value="Side Dish">Side Dish</SelectItem>
                      <SelectItem value="Dessert">Dessert</SelectItem>
                      <SelectItem value="Breakfast">Breakfast</SelectItem>
                      <SelectItem value="Soup">Soup</SelectItem>
                      <SelectItem value="Salad">Salad</SelectItem>
                      <SelectItem value="Appetizer">Appetizer</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="customCategory">Or Enter Your Own Category</Label>
                  <Input
                    id="customCategory"
                    name="customCategory"
                    value={formData.customCategory}
                    onChange={handleChange}
                    placeholder="Enter custom category"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mealTime">Meal Time*</Label>
                  <Select
                    name="mealTime"
                    onValueChange={(value) => handleSelectChange("mealTime", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select meal time" />
                    </SelectTrigger>
                    <SelectContent>
                      {mealTimes.filter(t => t !== "All").map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty*</Label>
                  <Select
                    name="difficulty"
                    onValueChange={(value) => handleSelectChange("difficulty", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.filter(d => d !== "All").map((diff) => (
                        <SelectItem key={diff} value={diff}>
                          {diff}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="prepTime">Prep Time (minutes)</Label>
                  <Input
                    id="prepTime"
                    name="prepTime"
                    type="number"
                    min="1"
                    value={formData.prepTime}
                    onChange={handleNumberChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cookTime">Cook Time (minutes)</Label>
                  <Input
                    id="cookTime"
                    name="cookTime"
                    type="number"
                    min="0"
                    value={formData.cookTime}
                    onChange={handleNumberChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="servings">Servings</Label>
                  <Input
                    id="servings"
                    name="servings"
                    type="number"
                    min="1"
                    value={formData.servings}
                    onChange={handleNumberChange}
                  />
                </div>
              </div>
            </div>
            
            {/* Recipe Image */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-recipe-secondary">
                Recipe Image
              </h2>
              
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-100 border">
                    <img
                      src={imagePreview}
                      alt="Recipe preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 flex-grow">
                  <Label htmlFor="image">Upload Image</Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="cursor-pointer"
                    ref={fileInputRef}
                  />
                  <p className="text-sm text-recipe-dark/70">
                    Upload a clear, appetizing photo of your finished recipe.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Ingredients */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-recipe-secondary">
                Ingredients*
              </h2>
              
              <div className="flex gap-2">
                <Input
                  value={currentIngredient}
                  onChange={(e) => setCurrentIngredient(e.target.value)}
                  placeholder="Add an ingredient"
                  className="flex-grow"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddIngredient();
                    }
                  }}
                />
                <Button type="button" onClick={handleAddIngredient}>
                  Add
                </Button>
              </div>
              
              {formData.ingredients.length > 0 ? (
                <ul className="space-y-2 list-disc list-inside">
                  {formData.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex justify-between items-center group">
                      <span>{ingredient}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="p-1 h-6 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleRemoveIngredient(index)}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-recipe-dark/70">
                  No ingredients added yet. Add your first ingredient above.
                </p>
              )}
            </div>
            
            {/* Instructions */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-recipe-secondary">
                Instructions*
              </h2>
              
              <div className="flex gap-2">
                <Textarea
                  value={currentStep}
                  onChange={(e) => setCurrentStep(e.target.value)}
                  placeholder="Add a step"
                  className="flex-grow"
                  rows={2}
                />
                <Button type="button" onClick={handleAddStep} className="self-start">
                  Add
                </Button>
              </div>
              
              {formData.steps.length > 0 ? (
                <ol className="space-y-4 list-decimal list-inside">
                  {formData.steps.map((step, index) => (
                    <li key={index} className="group">
                      <div className="flex justify-between items-start">
                        <span className="inline-block pl-2">{step}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="p-1 h-6 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleRemoveStep(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-sm text-recipe-dark/70">
                  No steps added yet. Add your first instruction above.
                </p>
              )}
            </div>
            
            {/* Submit Button */}
            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full md:w-auto bg-recipe-primary hover:bg-recipe-secondary">
                Upload Recipe
              </Button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UploadRecipe;
