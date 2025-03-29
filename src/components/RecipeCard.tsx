
import { Link } from "react-router-dom";
import { Recipe } from "@/data/recipes";
import SaveButton from "./SaveButton";
import { Clock, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

interface RecipeCardProps {
  recipe: Recipe & { rating?: number };
  onDelete?: () => void;
}

const RecipeCard = ({ recipe, onDelete }: RecipeCardProps) => {
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
            {onDelete && (
              <Button 
                variant="outline" 
                size="sm" 
                className="p-1 h-8 w-8 text-red-500 hover:text-white hover:bg-red-500"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDelete();
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
