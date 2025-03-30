
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Recipe } from "@/data/recipes";
import jsPDF from "jspdf";

interface DownloadButtonProps {
  recipe: Recipe;
  size?: "sm" | "lg";
}

const DownloadButton = ({ recipe, size = "sm" }: DownloadButtonProps) => {
  const handleDownload = () => {
    // Create new PDF document
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    let y = 20;
    
    // Add recipe title
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(recipe.title, margin, y);
    y += 10;
    
    // Add recipe category and difficulty
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Category: ${recipe.category} | Difficulty: ${recipe.difficulty}`, margin, y);
    y += 10;
    
    // Add recipe time information
    doc.text(`Prep Time: ${recipe.prepTime} mins | Cook Time: ${recipe.cookTime} mins | Total Time: ${recipe.prepTime + recipe.cookTime} mins`, margin, y);
    y += 10;
    
    // Add servings information
    doc.text(`Servings: ${recipe.servings}`, margin, y);
    y += 10;
    
    // Add recipe description
    doc.setFont("helvetica", "italic");
    const descriptionLines = doc.splitTextToSize(recipe.description, contentWidth);
    doc.text(descriptionLines, margin, y);
    y += (descriptionLines.length * 7) + 10;
    
    // Add ingredients section
    doc.setFont("helvetica", "bold");
    doc.text("Ingredients:", margin, y);
    y += 7;
    
    // Add ingredients list
    doc.setFont("helvetica", "normal");
    recipe.ingredients.forEach(ingredient => {
      const ingredientText = `• ${ingredient.amount} ${ingredient.unit} ${ingredient.name}`;
      doc.text(ingredientText, margin, y);
      y += 7;
    });
    y += 5;
    
    // Add instructions section
    doc.setFont("helvetica", "bold");
    doc.text("Instructions:", margin, y);
    y += 7;
    
    // Add instructions list
    doc.setFont("helvetica", "normal");
    recipe.instructions.forEach((instruction, index) => {
      // Check if we need a new page
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      
      const stepText = `${index + 1}. ${instruction}`;
      const instructionLines = doc.splitTextToSize(stepText, contentWidth);
      doc.text(instructionLines, margin, y);
      y += (instructionLines.length * 7) + 5;
    });
    
    // Add nutritional information if available
    if (recipe.nutritionalInfo) {
      // Check if we need a new page
      if (y > 250) {
        doc.addPage();
        y = 20;
      }
      
      y += 5;
      doc.setFont("helvetica", "bold");
      doc.text("Nutritional Information (per serving):", margin, y);
      y += 7;
      
      doc.setFont("helvetica", "normal");
      
      if (recipe.nutritionalInfo.calories) {
        doc.text(`Calories: ${recipe.nutritionalInfo.calories} kcal`, margin, y);
        y += 7;
      }
      
      if (recipe.nutritionalInfo.protein) {
        doc.text(`Protein: ${recipe.nutritionalInfo.protein}g`, margin, y);
        y += 7;
      }
      
      if (recipe.nutritionalInfo.carbs) {
        doc.text(`Carbs: ${recipe.nutritionalInfo.carbs}g`, margin, y);
        y += 7;
      }
      
      if (recipe.nutritionalInfo.fat) {
        doc.text(`Fat: ${recipe.nutritionalInfo.fat}g`, margin, y);
        y += 7;
      }
      
      if (recipe.nutritionalInfo.fiber) {
        doc.text(`Fiber: ${recipe.nutritionalInfo.fiber}g`, margin, y);
        y += 7;
      }
    }
    
    // Save the PDF
    const filename = `${recipe.title.toLowerCase().replace(/\s+/g, "-")}.pdf`;
    doc.save(filename);
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
