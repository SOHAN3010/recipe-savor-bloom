
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Recipe } from "@/data/recipes";

interface DownloadButtonProps {
  recipe: Recipe;
  size?: "sm" | "lg";
}

const DownloadButton = ({ recipe, size = "sm" }: DownloadButtonProps) => {
  const handleDownload = () => {
    // Create a JSON object with recipe data
    const recipeData = {
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      servings: recipe.servings,
      difficulty: recipe.difficulty,
      category: recipe.category,
      nutritionalInfo: recipe.nutritionalInfo
    };
    
    // Convert to a string
    const recipeString = JSON.stringify(recipeData, null, 2);
    
    // Create a blob and download link
    const blob = new Blob([recipeString], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    
    // Create and trigger download
    const link = document.createElement("a");
    link.href = href;
    link.download = `${recipe.title.toLowerCase().replace(/\s+/g, "-")}.json`;
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <Button
      variant="outline"
      size={size === "lg" ? "default" : "sm"}
      className={`${size === "lg" ? "p-2 h-10 w-10" : "p-1 h-8 w-8"} text-blue-500 hover:text-white hover:bg-blue-500`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleDownload();
      }}
    >
      <Download className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      <span className="sr-only">Download Recipe</span>
    </Button>
  );
};

export default DownloadButton;
