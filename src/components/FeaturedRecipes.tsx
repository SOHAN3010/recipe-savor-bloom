
import { Recipe } from "@/data/recipes";
import RecipeCard from "./RecipeCard";

interface FeaturedRecipesProps {
  recipes: Recipe[];
}

const FeaturedRecipes = ({ recipes }: FeaturedRecipesProps) => {
  const featuredRecipes = recipes.filter(recipe => recipe.featured);
  
  if (featuredRecipes.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold text-recipe-secondary mb-6">
        Featured Recipes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecipes;
