
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { recipes, mealTimes } from "@/data/recipes";
import CategoryFilter from "@/components/CategoryFilter";
import RecipeCard from "@/components/RecipeCard";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeMealTime, setActiveMealTime] = useState("All");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";
    
    let filtered = recipes;
    
    // Apply search filter if there's a query
    if (searchQuery) {
      filtered = recipes.filter(
        recipe => 
          recipe.title.toLowerCase().includes(searchQuery) ||
          recipe.description.toLowerCase().includes(searchQuery) ||
          recipe.category.toLowerCase().includes(searchQuery)
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
    
    setFilteredRecipes(filtered);
  }, [activeCategory, activeMealTime, location.search]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleMealTimeChange = (mealTime: string) => {
    setActiveMealTime(mealTime);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
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
        
        <FeaturedRecipes recipes={recipes} />
        
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-heading font-bold text-recipe-secondary">
            All Recipes
          </h2>
          
          <p className="text-recipe-dark/70">
            {filteredRecipes.length} {filteredRecipes.length === 1 ? "recipe" : "recipes"} found
          </p>
        </div>
        
        <CategoryFilter 
          activeCategory={activeCategory} 
          activeMealTime={activeMealTime}
          onCategoryChange={handleCategoryChange} 
          onMealTimeChange={handleMealTimeChange}
        />
        
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-recipe-dark/80 text-lg mb-4">No recipes found.</p>
            <button 
              onClick={() => {
                setActiveCategory("All");
                setActiveMealTime("All");
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
