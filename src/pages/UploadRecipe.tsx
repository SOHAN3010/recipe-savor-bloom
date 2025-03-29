import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { categories } from "@/data/recipes";
import { Upload, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Recipe } from "@/data/recipes";

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1, "Please select a category"),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  prepTime: z.number().min(1, "Prep time must be at least 1 minute"),
  cookTime: z.number().min(1, "Cook time must be at least 1 minute"),
  servings: z.number().min(1, "Servings must be at least 1"),
  imageUrl: z.string().url("Please enter a valid image URL"),
});

type ExtendedRecipe = Recipe & {
  rating?: number;
};

const UploadRecipe = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [instructions, setInstructions] = useState<string[]>([""]);
  const [nutritionalInfo, setNutritionalInfo] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: categories[0],
      difficulty: "Medium",
      prepTime: 10,
      cookTime: 20,
      servings: 4,
      imageUrl: "https://source.unsplash.com/random/800x600/?food",
    },
  });

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const updateIngredient = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const addInstruction = () => {
    setInstructions([...instructions, ""]);
  };

  const removeInstruction = (index: number) => {
    const newInstructions = [...instructions];
    newInstructions.splice(index, 1);
    setInstructions(newInstructions);
  };

  const updateInstruction = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const filteredIngredients = ingredients.filter(item => item.trim() !== "");
    const filteredInstructions = instructions.filter(item => item.trim() !== "");

    if (filteredIngredients.length === 0) {
      toast.error("Please add at least one ingredient");
      return;
    }

    if (filteredInstructions.length === 0) {
      toast.error("Please add at least one instruction");
      return;
    }

    const newRecipe: ExtendedRecipe = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      category: values.category,
      difficulty: values.difficulty,
      prepTime: values.prepTime,
      cookTime: values.cookTime,
      servings: values.servings,
      imageUrl: values.imageUrl,
      ingredients: filteredIngredients,
      instructions: filteredInstructions,
      likes: 0,
      featured: false,
      nutritionalInfo: nutritionalInfo.calories > 0 ? nutritionalInfo : undefined,
    };

    const userRecipes = JSON.parse(localStorage.getItem("userRecipes") || "[]");
    userRecipes.push(newRecipe);
    
    localStorage.setItem("userRecipes", JSON.stringify(userRecipes));
    
    toast.success("Recipe uploaded successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <Upload size={24} className="mr-2 text-recipe-primary" />
            <h1 className="text-3xl font-heading font-bold text-recipe-secondary">
              Upload Your Recipe
            </h1>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Recipe Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter recipe title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <select
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          {...field}
                        >
                          {categories.filter(cat => cat !== "All").map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your recipe" 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <FormField
                  control={form.control}
                  name="difficulty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Difficulty</FormLabel>
                      <FormControl>
                        <select
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          {...field}
                        >
                          <option value="Easy">Easy</option>
                          <option value="Medium">Medium</option>
                          <option value="Hard">Hard</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="prepTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prep Time (min)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="1" 
                          {...field} 
                          onChange={e => field.onChange(parseInt(e.target.value) || 0)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cookTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cook Time (min)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="1" 
                          {...field} 
                          onChange={e => field.onChange(parseInt(e.target.value) || 0)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="servings"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Servings</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="1" 
                          {...field} 
                          onChange={e => field.onChange(parseInt(e.target.value) || 0)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter image URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div>
                <label className="block text-sm font-medium mb-1">Ingredients</label>
                <div className="space-y-2">
                  {ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        value={ingredient}
                        onChange={(e) => updateIngredient(index, e.target.value)}
                        placeholder={`Ingredient ${index + 1}`}
                        className="flex-grow"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeIngredient(index)}
                        disabled={ingredients.length === 1}
                      >
                        <Minus size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={addIngredient}
                >
                  <Plus size={16} className="mr-1" /> Add Ingredient
                </Button>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Instructions</label>
                <div className="space-y-2">
                  {instructions.map((instruction, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Textarea
                        value={instruction}
                        onChange={(e) => updateInstruction(index, e.target.value)}
                        placeholder={`Step ${index + 1}`}
                        className="flex-grow"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeInstruction(index)}
                        disabled={instructions.length === 1}
                      >
                        <Minus size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={addInstruction}
                >
                  <Plus size={16} className="mr-1" /> Add Instruction
                </Button>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Nutritional Information (Optional)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Calories</label>
                    <Input
                      type="number"
                      min="0"
                      value={nutritionalInfo.calories}
                      onChange={(e) => setNutritionalInfo({
                        ...nutritionalInfo,
                        calories: parseInt(e.target.value) || 0
                      })}
                      placeholder="Calories"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Protein (g)</label>
                    <Input
                      type="number"
                      min="0"
                      value={nutritionalInfo.protein}
                      onChange={(e) => setNutritionalInfo({
                        ...nutritionalInfo,
                        protein: parseInt(e.target.value) || 0
                      })}
                      placeholder="Protein"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Carbs (g)</label>
                    <Input
                      type="number"
                      min="0"
                      value={nutritionalInfo.carbs}
                      onChange={(e) => setNutritionalInfo({
                        ...nutritionalInfo,
                        carbs: parseInt(e.target.value) || 0
                      })}
                      placeholder="Carbs"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Fat (g)</label>
                    <Input
                      type="number"
                      min="0"
                      value={nutritionalInfo.fat}
                      onChange={(e) => setNutritionalInfo({
                        ...nutritionalInfo,
                        fat: parseInt(e.target.value) || 0
                      })}
                      placeholder="Fat"
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-recipe-primary hover:bg-recipe-secondary text-white"
              >
                <Upload className="mr-2" size={18} />
                Upload Recipe
              </Button>
            </form>
          </Form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UploadRecipe;
