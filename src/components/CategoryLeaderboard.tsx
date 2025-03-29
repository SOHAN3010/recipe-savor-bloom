
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Recipe, categories } from "@/data/recipes";
import { Heart } from "lucide-react";

interface CategoryLeaderboardProps {
  recipes: (Recipe & { rating?: number })[];
}

const CategoryLeaderboard = ({ recipes }: CategoryLeaderboardProps) => {
  const topRecipesByCategory = useMemo(() => {
    const result: { [category: string]: (Recipe & { rating?: number }) | null } = {};
    
    // Filter out "All" category
    const actualCategories = categories.filter(cat => cat !== "All");
    
    actualCategories.forEach(category => {
      const categoryRecipes = recipes.filter(recipe => recipe.category === category);
      
      if (categoryRecipes.length === 0) {
        result[category] = null;
        return;
      }
      
      // Find the recipe with the highest like count
      const topRecipe = categoryRecipes.reduce((prev, current) => {
        const prevLikes = prev.likes || 0;
        const currentLikes = current.likes || 0;
        return currentLikes > prevLikes ? current : prev;
      }, categoryRecipes[0]);
      
      result[category] = topRecipe;
    });
    
    return result;
  }, [recipes]);
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold text-recipe-secondary mb-6">
        Top Recipes by Category
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(topRecipesByCategory).map(([category, recipe]) => (
          <div key={category} className="recipe-card">
            {recipe ? (
              <Link to={`/recipe/${recipe.id}`} className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="recipe-card-image"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="category-pill bg-recipe-light text-recipe-secondary">
                      {category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-heading font-semibold mb-2 text-recipe-secondary">
                    {recipe.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-recipe-primary font-medium">
                    <Heart className="w-4 h-4 mr-1 fill-current" />
                    <span>{recipe.likes || 0} likes</span>
                  </div>
                  
                  {recipe.rating && (
                    <div className="mt-2 text-sm text-recipe-dark/70">
                      Rating: {recipe.rating.toFixed(1)} / 5
                    </div>
                  )}
                </div>
              </Link>
            ) : (
              <div className="p-6 flex flex-col items-center justify-center h-full min-h-[200px] bg-muted">
                <h3 className="text-xl font-heading font-semibold mb-2 text-recipe-secondary">
                  {category}
                </h3>
                <p className="text-center text-recipe-dark/70">
                  No recipes available in this category yet.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryLeaderboard;
