
import React from "react";

interface NutritionalInfoProps {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const NutritionalInfo = ({ calories, protein, carbs, fat }: NutritionalInfoProps) => {
  return (
    <div className="bg-slate-50 rounded-md p-4 shadow-sm">
      <h3 className="text-lg font-medium text-recipe-secondary mb-2">Nutritional Information</h3>
      <p className="text-sm text-recipe-dark/80 mb-2">Per serving</p>
      
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-white p-2 rounded-md text-center">
          <p className="text-sm font-semibold text-recipe-primary">{calories}</p>
          <p className="text-xs text-recipe-dark/70">calories</p>
        </div>
        <div className="bg-white p-2 rounded-md text-center">
          <p className="text-sm font-semibold text-recipe-primary">{protein}g</p>
          <p className="text-xs text-recipe-dark/70">protein</p>
        </div>
        <div className="bg-white p-2 rounded-md text-center">
          <p className="text-sm font-semibold text-recipe-primary">{carbs}g</p>
          <p className="text-xs text-recipe-dark/70">carbs</p>
        </div>
        <div className="bg-white p-2 rounded-md text-center">
          <p className="text-sm font-semibold text-recipe-primary">{fat}g</p>
          <p className="text-xs text-recipe-dark/70">fat</p>
        </div>
      </div>
    </div>
  );
};

export default NutritionalInfo;
