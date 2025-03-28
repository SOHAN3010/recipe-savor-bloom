
import { Recipe } from "@/data/recipes";
import { Clock, Users } from "lucide-react";

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
      </div>
      
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-recipe-secondary mb-4">
        {recipe.title}
      </h1>
      
      <p className="text-lg text-recipe-dark/90 mb-6">{recipe.description}</p>
      
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
    </div>
  );
};

export default RecipeHeader;
