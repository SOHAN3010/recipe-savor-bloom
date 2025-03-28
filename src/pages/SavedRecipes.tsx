
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookmarkX } from "lucide-react";
import { toast } from "sonner";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  
  useEffect(() => {
    const fetchSavedRecipes = () => {
      const saved = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
      setSavedRecipes(saved);
    };
    
    fetchSavedRecipes();
    
    // Add event listener for storage changes
    window.addEventListener("storage", fetchSavedRecipes);
    
    // Custom event for when the save button is clicked
    window.addEventListener("savedRecipesUpdated", fetchSavedRecipes);
    
    return () => {
      window.removeEventListener("storage", fetchSavedRecipes);
      window.removeEventListener("savedRecipesUpdated", fetchSavedRecipes);
    };
  }, []);
  
  const clearAllSaved = () => {
    localStorage.setItem("savedRecipes", "[]");
    setSavedRecipes([]);
    toast.success("All saved recipes cleared");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-recipe-secondary mb-4">
            Your Saved Recipes
          </h1>
          <p className="text-recipe-dark/80 text-lg max-w-2xl mx-auto">
            Access your favorite recipes anytime, even offline.
          </p>
        </div>
        
        <div className="mb-6 flex justify-between items-center">
          <Link to="/" className="button-outline">
            Back to All Recipes
          </Link>
          
          {savedRecipes.length > 0 && (
            <button 
              onClick={clearAllSaved}
              className="flex items-center gap-1 text-red-500 hover:text-red-700 transition-colors"
            >
              <BookmarkX size={18} />
              <span>Clear All Saved</span>
            </button>
          )}
        </div>
        
        {savedRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-heading font-bold text-recipe-secondary mb-4">
              No Saved Recipes Yet
            </h2>
            <p className="text-recipe-dark/80 text-lg mb-6">
              You haven't saved any recipes yet. Browse recipes and click the bookmark icon to save them for later.
            </p>
            <Link to="/" className="button-primary">
              Discover Recipes
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default SavedRecipes;
