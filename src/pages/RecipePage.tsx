
import { useParams, Link, useNavigate } from "react-router-dom";
import { recipes } from "@/data/recipes";
import RecipeHeader from "@/components/RecipeHeader";
import IngredientList from "@/components/IngredientList";
import InstructionSteps from "@/components/InstructionSteps";
import PrintButton from "@/components/PrintButton";
import RecipeComments from "@/components/RecipeComments";
import RecipeRating from "@/components/RecipeRating";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Get recipe from both predefined recipes and user uploaded recipes
  const defaultRecipes = JSON.parse(localStorage.getItem("defaultRecipes") || JSON.stringify(recipes));
  const userRecipes = JSON.parse(localStorage.getItem("userRecipes") || "[]");
  
  const allRecipes = [...defaultRecipes, ...userRecipes];
  const recipe = allRecipes.find(r => r.id === id);
  
  // Check if this is a user recipe
  const isUserRecipe = recipe?.userId === "user";
  
  const handleDeleteRecipe = () => {
    if (!isUserRecipe) return;
    
    const updatedUserRecipes = userRecipes.filter((r) => r.id !== id);
    localStorage.setItem("userRecipes", JSON.stringify(updatedUserRecipes));
    
    // Also remove from saved recipes if it was saved
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    const updatedSavedRecipes = savedRecipes.filter((r) => r.id !== id);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
    
    toast.success("Recipe deleted successfully");
    navigate("/");
  };
  
  const handleEditRecipe = () => {
    if (!isUserRecipe) return;
    navigate(`/edit-recipe/${id}`);
  };
  
  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="text-center py-16">
            <h1 className="text-3xl font-heading font-bold text-recipe-secondary mb-4">
              Recipe Not Found
            </h1>
            <p className="text-recipe-dark/80 mb-6">
              The recipe you're looking for doesn't exist or may have been removed.
            </p>
            <Link to="/" className="button-primary">
              Browse All Recipes
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-6 no-print">
          <Link to="/" className="flex items-center text-recipe-primary hover:text-recipe-secondary transition-colors">
            <ArrowLeft size={18} className="mr-1" />
            Back to all recipes
          </Link>
          
          {isUserRecipe && (
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
                onClick={handleEditRecipe}
              >
                <Edit size={16} />
                Edit Recipe
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1 text-red-500 hover:text-white hover:bg-red-500 border-red-200"
                onClick={handleDeleteRecipe}
              >
                <Trash2 size={16} />
                Delete Recipe
              </Button>
            </div>
          )}
        </div>
        
        <div className="max-w-3xl mx-auto recipe-container">
          <RecipeHeader recipe={recipe} />
          
          <div className="mb-6 no-print">
            <RecipeRating recipe={recipe} size="lg" />
          </div>
          
          <div className="print-only mb-4">
            <p><strong>Total Time:</strong> {recipe.prepTime + recipe.cookTime} minutes</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="md:col-span-1">
              <IngredientList 
                ingredients={recipe.ingredients} 
                ingredientSubstitutions={recipe.ingredientSubstitutions}
                servings={recipe.servings} 
                nutritionalInfo={recipe.nutritionalInfo}
              />
            </div>
            
            <div className="md:col-span-2">
              <InstructionSteps instructions={recipe.instructions} />
            </div>
          </div>
          
          <RecipeComments recipeId={recipe.id} />
        </div>
        
        <PrintButton />
      </main>
      
      <Footer />
    </div>
  );
};

export default RecipePage;
