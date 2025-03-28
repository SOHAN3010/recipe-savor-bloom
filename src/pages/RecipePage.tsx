
import { useParams, Link } from "react-router-dom";
import { recipes } from "@/data/recipes";
import RecipeHeader from "@/components/RecipeHeader";
import IngredientList from "@/components/IngredientList";
import InstructionSteps from "@/components/InstructionSteps";
import PrintButton from "@/components/PrintButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const RecipePage = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);
  
  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="text-center py-16">
            <h1 className="text-3xl font-heading font-bold text-recipe-secondary mb-4">
              Recipe Not Found
            </h1>
            <p className="text-recipe-dark/80 mb-6">
              The recipe you're looking for doesn't exist or may have been removed.
            </p>
            <Link to="/" className="button-primary">
              Browse All Recipes
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Link to="/" className="flex items-center text-recipe-primary hover:text-recipe-secondary transition-colors mb-6 no-print">
          <ArrowLeft size={18} className="mr-1" />
          Back to all recipes
        </Link>
        
        <div className="max-w-3xl mx-auto recipe-container">
          <RecipeHeader recipe={recipe} />
          
          <div className="print-only mb-4">
            <p><strong>Total Time:</strong> {recipe.prepTime + recipe.cookTime} minutes</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="md:col-span-1">
              <IngredientList 
                ingredients={recipe.ingredients} 
                servings={recipe.servings} 
              />
            </div>
            
            <div className="md:col-span-2">
              <InstructionSteps instructions={recipe.instructions} />
            </div>
          </div>
        </div>
        
        <PrintButton />
      </main>
      
      <Footer />
    </div>
  );
};

export default RecipePage;
