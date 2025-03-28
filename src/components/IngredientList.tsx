
import { useState } from "react";

interface IngredientListProps {
  ingredients: string[];
  servings: number;
}

const IngredientList = ({ ingredients, servings }: IngredientListProps) => {
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
  
  // Simplified ingredient scaling - assumes numbers at the beginning of strings
  const scaleIngredient = (ingredient: string): string => {
    if (servingCount === servings) return ingredient;
    
    return ingredient.replace(/^(\d+(\.\d+)?)/, (match) => {
      const originalValue = parseFloat(match);
      const scaledValue = (originalValue * servingCount) / servings;
      return scaledValue.toString();
    });
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
