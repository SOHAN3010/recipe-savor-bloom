
import { Link } from "react-router-dom";
import { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="block recipe-card">
      <div className="relative overflow-hidden">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="recipe-card-image"
        />
        <div className="absolute top-4 right-4">
          <span className="category-pill bg-recipe-light text-recipe-secondary">
            {recipe.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-heading font-semibold mb-2 text-recipe-secondary">
          {recipe.title}
        </h3>
        
        <div className="flex items-center text-sm text-recipe-dark/70 mb-3">
          <span className="mr-4">Prep: {recipe.prepTime} min</span>
          <span>Cook: {recipe.cookTime} min</span>
        </div>
        
        <p className="text-recipe-dark/90 line-clamp-2">
          {recipe.description}
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
