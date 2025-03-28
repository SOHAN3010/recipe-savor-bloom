
import { useState, useEffect } from "react";
import { Bookmark } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { toast } from "sonner";

interface SaveButtonProps {
  recipe: Recipe;
  size?: "sm" | "md" | "lg";
}

const SaveButton = ({ recipe, size = "md" }: SaveButtonProps) => {
  const [isSaved, setIsSaved] = useState(false);
  
  // Check local storage on component mount
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    const isRecipeSaved = savedRecipes.some((saved: Recipe) => saved.id === recipe.id);
    setIsSaved(isRecipeSaved);
  }, [recipe.id]);

  const handleSave = () => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    
    if (isSaved) {
      // Remove recipe from saved list
      const updatedSavedRecipes = savedRecipes.filter(
        (saved: Recipe) => saved.id !== recipe.id
      );
      localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
      setIsSaved(false);
      toast.success("Recipe removed from saved recipes");
    } else {
      // Add recipe to saved list
      savedRecipes.push(recipe);
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
      setIsSaved(true);
      toast.success("Recipe saved successfully");
    }
  };

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <button 
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation when inside a link
        e.stopPropagation(); // Prevent event bubbling
        handleSave();
      }}
      className={`flex items-center gap-1 ${sizeClasses[size]} transition-all duration-300`}
      aria-label={isSaved ? "Remove from saved recipes" : "Save recipe"}
    >
      <Bookmark 
        className={`transition-colors duration-300 ${isSaved ? 'fill-recipe-primary text-recipe-primary' : 'text-gray-400 hover:text-recipe-primary'}`} 
        size={size === "lg" ? 22 : size === "md" ? 18 : 16} 
      />
    </button>
  );
};

export default SaveButton;
