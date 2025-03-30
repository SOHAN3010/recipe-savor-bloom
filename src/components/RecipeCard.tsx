import { Link } from "react-router-dom";
import { Recipe } from "@/data/recipes";
import SaveButton from "./SaveButton";
import { Clock, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface RecipeCardProps {
  recipe: Recipe & { rating?: number; userId?: string };
  onDelete?: () => void;
}

const RecipeCard = ({ recipe, onDelete }: RecipeCardProps) => {
  const handleDelete = () => {
    // If there's an onDelete handler provided, use it
    if (onDelete) {
      onDelete();
      return;
    }
    
    // Otherwise, handle deletion logic here
    if (recipe.userId === "user") {
      const userRecipes = JSON.parse(localStorage.getItem("userRecipes") || "[]");
      const updatedUserRecipes = userRecipes.filter((r: Recipe) => r.id !== recipe.id);
      localStorage.setItem("userRecipes", JSON.stringify(updatedUserRecipes));
      
      // Also remove from saved recipes if it was saved
      const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
      const updatedSavedRecipes = savedRecipes.filter((r: Recipe) => r.id !== recipe.id);
      localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
      
      toast.success("Recipe deleted successfully");
      
      // Dispatch event to notify other components
      window.dispatchEvent(new Event("recipeDeleted"));
    }
  };

  return (
    <div className="recipe-card overflow-hidden rounded-lg shadow-md bg-white transition-all hover:shadow-lg">
      <Link to={`/recipe/${recipe.id}`} className="block relative">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="category-pill bg-recipe-light text-recipe-secondary">
            {recipe.category}
          </span>
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/recipe/${recipe.id}`}>
          <h3 className="text-xl font-heading font-semibold mb-2 text-recipe-secondary hover:text-recipe-primary transition-colors">
            {recipe.title}
          </h3>
        </Link>
        
        <p className="text-sm text-recipe-dark/80 mb-3 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-recipe-dark/70">
            <Clock className="w-4 h-4 mr-1" />
            <span>{recipe.prepTime + recipe.cookTime} mins</span>
          </div>
          
          <div className="flex items-center gap-2">
            {recipe.userId === "user" && (
              <Button 
                variant="outline" 
                size="sm" 
                className="p-1 h-8 w-8 text-red-500 hover:text-white hover:bg-red-500"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDelete();
                }}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            )}
            <SaveButton recipeId={recipe.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
