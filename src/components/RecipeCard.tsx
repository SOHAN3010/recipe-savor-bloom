
import { Link } from "react-router-dom";
import { Recipe } from "@/data/recipes";
import LikeButton from "./LikeButton";
import SaveButton from "./SaveButton";

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
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-heading font-semibold text-recipe-secondary">
            {recipe.title}
          </h3>
          <div className="flex gap-2">
            <SaveButton recipe={recipe} />
            <LikeButton recipe={recipe} />
          </div>
        </div>
        
        <div className="flex items-center text-sm text-recipe-dark/70 mb-3">
          <span className="mr-4">Prep: {recipe.prepTime} min</span>
          <span>Cook: {recipe.cookTime} min</span>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <p className="text-recipe-dark/90 line-clamp-2">
            {recipe.description}
          </p>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            recipe.difficulty === "Easy" ? "bg-green-100 text-green-800" : 
            recipe.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" : 
            "bg-red-100 text-red-800"
          }`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
