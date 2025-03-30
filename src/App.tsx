
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RecipePage from "./pages/RecipePage";
import SavedRecipes from "./pages/SavedRecipes";
import UploadRecipe from "./pages/UploadRecipe";
import EditRecipe from "./pages/EditRecipe";
import { useEffect } from "react";
import { recipes } from "./data/recipes";

function App() {
  // Store default recipes in localStorage on first load
  useEffect(() => {
    if (!localStorage.getItem("defaultRecipes")) {
      localStorage.setItem("defaultRecipes", JSON.stringify(recipes));
    }
  }, []);

  return (
    <Router>
      <div className="font-sans text-recipe-dark">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/upload-recipe" element={<UploadRecipe />} />
          <Route path="/edit-recipe/:id" element={<EditRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Toaster richColors position="top-center" />
    </Router>
  );
}

export default App;
