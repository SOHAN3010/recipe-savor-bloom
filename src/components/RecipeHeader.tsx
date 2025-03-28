
import { Recipe } from "@/data/recipes";
import { Clock, Users } from "lucide-react";
import LikeButton from "./LikeButton";
import SaveButton from "./SaveButton";
import NutritionalInfo from "./NutritionalInfo";

interface RecipeHeaderProps {
  recipe: Recipe;
}

const RecipeHeader = ({ recipe }: RecipeHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="relative h-72 md:h-96 rounded-lg overflow-hidden mb-6">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="category-pill bg-recipe-light text-recipe-secondary">
            {recipe.category}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`category-pill ${
            recipe.difficulty === "Easy" ? "bg-green-100 text-green-800" : 
            recipe.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" : 
            "bg-red-100 text-red-800"
          }`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-recipe-secondary mb-4">
          {recipe.title}
        </h1>
        <div className="flex gap-3">
          <SaveButton recipe={recipe} size="lg" />
          <LikeButton recipe={recipe} size="lg" />
        </div>
      </div>
      
      <p className="text-lg text-recipe-dark/90 mb-6">{recipe.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-wrap gap-y-3 gap-x-6 text-recipe-dark/80">
          <div className="flex items-center">
            <Clock className="mr-2" size={18} />
            <span>Prep Time: {recipe.prepTime} minutes</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="mr-2" size={18} />
            <span>Cook Time: {recipe.cookTime} minutes</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="mr-2" size={18} />
            <span>Total Time: {recipe.prepTime + recipe.cookTime} minutes</span>
          </div>
          
          <div className="flex items-center">
            <Users className="mr-2" size={18} />
            <span>Servings: {recipe.servings}</span>
          </div>
        </div>
        
        {recipe.nutritionalInfo && (
          <div>
            <NutritionalInfo 
              calories={recipe.nutritionalInfo.calories}
              protein={recipe.nutritionalInfo.protein}
              carbs={recipe.nutritionalInfo.carbs}
              fat={recipe.nutritionalInfo.fat}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeHeader;
