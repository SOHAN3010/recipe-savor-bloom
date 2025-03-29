
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "@/data/recipes";
import { Trophy, Heart } from "lucide-react";

interface RecipeLeaderboardProps {
  recipes: Recipe[];
  limit?: number;
}

const RecipeLeaderboard = ({ recipes, limit = 3 }: RecipeLeaderboardProps) => {
  const topRecipes = useMemo(() => {
    return [...recipes]
      .sort((a, b) => (b.likes || 0) - (a.likes || 0))
      .slice(0, limit);
  }, [recipes, limit]);
  
  if (topRecipes.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold text-recipe-secondary mb-6 flex items-center">
        <Trophy className="mr-2 text-yellow-500" size={24} />
        Top Rated Recipes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topRecipes.map((recipe, index) => (
          <Link to={`/recipe/${recipe.id}`} className="block recipe-card transform transition-all hover:scale-105" key={recipe.id}>
            <div className="relative overflow-hidden">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="recipe-card-image"
              />
              <div className="absolute top-4 left-4">
                <div className={`
                  ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-300' : 'bg-amber-600'} 
                  text-white font-bold rounded-full w-8 h-8 flex items-center justify-center
                `}>
                  {index + 1}
                </div>
              </div>
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
              
              <div className="flex items-center text-sm text-recipe-primary font-medium">
                <Heart className="w-4 h-4 mr-1 fill-red-500 text-red-500" />
                <span>{recipe.likes || 0} likes</span>
              </div>
              
              {recipe.rating && (
                <div className="mt-2 text-sm text-recipe-dark/70">
                  Rating: {recipe.rating.toFixed(1)} / 5
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeLeaderboard;
