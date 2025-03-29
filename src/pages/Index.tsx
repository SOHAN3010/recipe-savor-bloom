
import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { recipes as defaultRecipes, mealTimes, difficulties } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import RecipeLeaderboard from "@/components/RecipeLeaderboard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookmarkIcon } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { toast } from "sonner";

type ExtendedRecipe = Recipe & {
  rating?: number;
  userId?: string;
};

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Italian");
  const [activeMealTime, setActiveMealTime] = useState("All");
  const [activeDifficulty, setActiveDifficulty] = useState("All");
  const [filteredRecipes, setFilteredRecipes] = useState<ExtendedRecipe[]>([]);
  const [allRecipes, setAllRecipes] = useState<ExtendedRecipe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Load all recipes, including user uploaded ones
  useEffect(() => {
    // Get user recipes from localStorage
    const userRecipes: ExtendedRecipe[] = JSON.parse(localStorage.getItem("userRecipes") || "[]");
    
    // Combine default recipes with user recipes
    const combined = [...defaultRecipes, ...userRecipes];
    setAllRecipes(combined);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search")?.toLowerCase() || "";
    setSearchTerm(query);
    
    let filtered = allRecipes;
    
    // Apply search filter if there's a query
    if (query) {
      filtered = allRecipes.filter(
        recipe => 
          recipe.title.toLowerCase().includes(query) ||
          recipe.description.toLowerCase().includes(query) ||
          recipe.category.toLowerCase().includes(query) ||
          recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
      );
    }
    
    // Apply category filter unless it's "All"
    if (activeCategory !== "All") {
      filtered = filtered.filter(recipe => recipe.category === activeCategory);
    }
    
    // Apply meal time filter unless it's "All"
    if (activeMealTime !== "All") {
      filtered = filtered.filter(recipe => recipe.mealTime === activeMealTime);
    }
    
    // Apply difficulty filter unless it's "All"
    if (activeDifficulty !== "All") {
      filtered = filtered.filter(recipe => recipe.difficulty === activeDifficulty);
    }
    
    setFilteredRecipes(filtered);
  }, [activeCategory, activeMealTime, activeDifficulty, location.search, allRecipes]);

  const handleSearch = (term: string) => {
    if (term.trim()) {
      // Update URL with search parameter
      navigate(`/?search=${encodeURIComponent(term)}`);
    } else {
      // Clear search if term is empty
      navigate('/');
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleMealTimeChange = (mealTime: string) => {
    setActiveMealTime(mealTime);
  };

  const handleDifficultyChange = (difficulty: string) => {
    setActiveDifficulty(difficulty);
  };

  const handleDeleteRecipe = (recipeId: string) => {
    // Get current user recipes from localStorage
    const userRecipes: ExtendedRecipe[] = JSON.parse(localStorage.getItem("userRecipes") || "[]");
    
    // Filter out the recipe to delete
    const updatedUserRecipes = userRecipes.filter(recipe => recipe.id !== recipeId);
    
    // Save updated recipes back to localStorage
    localStorage.setItem("userRecipes", JSON.stringify(updatedUserRecipes));
    
    // Update allRecipes state to reflect the change
    const updatedAllRecipes = allRecipes.filter(recipe => recipe.id !== recipeId);
    setAllRecipes(updatedAllRecipes);
    
    // Toast notification
    toast.success("Recipe deleted successfully");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        selectedCategory={activeCategory}
      />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-recipe-secondary mb-4">
            Delicious Recipes that <span className="text-recipe-primary">Bloom</span>
          </h1>
          <p className="text-recipe-dark/80 text-lg max-w-2xl mx-auto">
            Discover mouthwatering recipes that are easy to make and sure to impress. 
            From quick weeknight dinners to elaborate weekend feasts.
          </p>
        </div>
        
        <div className="flex justify-end mb-8">
          <Link to="/saved-recipes" className="flex items-center gap-2 button-outline">
            <BookmarkIcon size={16} />
            <span>Saved Recipes</span>
          </Link>
        </div>
        
        <RecipeLeaderboard recipes={allRecipes} />
        
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-heading font-bold text-recipe-secondary">
            All Recipes
          </h2>
          
          <p className="text-recipe-dark/70">
            {filteredRecipes.length} {filteredRecipes.length === 1 ? "recipe" : "recipes"} found
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {[...allRecipes.map(r => r.category).filter((c, i, self) => self.indexOf(c) === i)].map(category => (
                <button 
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeCategory === category 
                      ? "bg-recipe-primary text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Meal Times</h3>
            <div className="flex flex-wrap gap-2">
              {mealTimes.map(mealTime => (
                <button 
                  key={mealTime}
                  onClick={() => handleMealTimeChange(mealTime)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeMealTime === mealTime 
                      ? "bg-recipe-secondary text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {mealTime}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Difficulty</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map(difficulty => (
                <button 
                  key={difficulty}
                  onClick={() => handleDifficultyChange(difficulty)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeDifficulty === difficulty 
                      ? difficulty === "Easy" 
                        ? "bg-green-500 text-white"
                        : difficulty === "Medium"
                          ? "bg-yellow-500 text-white"
                          : difficulty === "Hard" 
                            ? "bg-red-500 text-white"
                            : "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {searchTerm && (
          <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
            <p className="text-recipe-secondary">
              Search results for: <span className="font-semibold">"{searchTerm}"</span>
            </p>
          </div>
        )}
        
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onDelete={recipe.userId ? () => handleDeleteRecipe(recipe.id) : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-recipe-dark/80 text-lg mb-4">No recipes found.</p>
            <button 
              onClick={() => {
                setActiveCategory("All");
                setActiveMealTime("All");
                setActiveDifficulty("All");
                navigate('/');
              }}
              className="button-primary"
            >
              View All Recipes
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
