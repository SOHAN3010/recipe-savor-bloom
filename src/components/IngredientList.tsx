
import { useState } from "react";
import IngredientSubstitution from "./IngredientSubstitution";
import NutritionalInfo from "./NutritionalInfo";

interface IngredientListProps {
  ingredients: string[];
  ingredientSubstitutions?: { [ingredient: string]: string[] };
  servings: number;
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

const IngredientList = ({ 
  ingredients, 
  ingredientSubstitutions = {}, 
  servings,
  nutritionalInfo
}: IngredientListProps) => {
  const [checkedIngredients, setCheckedIngredients] = useState<{ [key: string]: boolean }>({});
  const [servingCount, setServingCount] = useState(servings);
  
  const handleCheckIngredient = (ingredient: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [ingredient]: !prev[ingredient]
    }));
  };
  
  const adjustServings = (change: number) => {
    const newValue = Math.max(1, servingCount + change);
    setServingCount(newValue);
  };
  
  // Updated to limit decimal places to 3
  const scaleIngredient = (ingredient: string): string => {
    if (servingCount === servings) return ingredient;
    
    return ingredient.replace(/^(\d+(\.\d+)?)/, (match) => {
      const originalValue = parseFloat(match);
      const scaledValue = (originalValue * servingCount) / servings;
      // Round to 3 decimal places
      return scaledValue.toFixed(3);
    });
  };

  // Calculate scaled nutritional info based on serving count
  const getScaledNutritionalInfo = () => {
    if (!nutritionalInfo) return null;
    
    const scaleFactor = servingCount / servings;
    
    return {
      calories: Math.round(nutritionalInfo.calories * scaleFactor),
      protein: Number((nutritionalInfo.protein * scaleFactor).toFixed(1)),
      carbs: Number((nutritionalInfo.carbs * scaleFactor).toFixed(1)),
      fat: Number((nutritionalInfo.fat * scaleFactor).toFixed(1))
    };
  };
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-heading font-semibold text-recipe-secondary">Ingredients</h2>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => adjustServings(-1)}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-muted hover:bg-recipe-accent transition-colors"
            aria-label="Decrease servings"
          >
            -
          </button>
          
          <span className="text-recipe-dark font-medium">{servingCount} {servingCount === 1 ? 'serving' : 'servings'}</span>
          
          <button 
            onClick={() => adjustServings(1)}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-muted hover:bg-recipe-accent transition-colors"
            aria-label="Increase servings"
          >
            +
          </button>
        </div>
      </div>
      
      {nutritionalInfo && (
        <div className="mb-4">
          <NutritionalInfo {...getScaledNutritionalInfo()} />
        </div>
      )}
      
      <ul className="space-y-2 text-recipe-dark">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-start">
            <input
              type="checkbox"
              id={`ingredient-${index}`}
              checked={checkedIngredients[ingredient] || false}
              onChange={() => handleCheckIngredient(ingredient)}
              className="checkbox-ingredient mt-1"
            />
            <label 
              htmlFor={`ingredient-${index}`}
              className={`cursor-pointer ${checkedIngredients[ingredient] ? 'line-through text-recipe-dark/50' : ''}`}
            >
              {scaleIngredient(ingredient)}
            </label>
            
            {ingredientSubstitutions[ingredient] && (
              <IngredientSubstitution 
                ingredient={ingredient} 
                substitutions={ingredientSubstitutions[ingredient]} 
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
