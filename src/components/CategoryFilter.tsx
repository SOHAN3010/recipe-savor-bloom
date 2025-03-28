
import { categories, mealTimes } from "@/data/recipes";

interface CategoryFilterProps {
  activeCategory: string;
  activeMealTime: string;
  onCategoryChange: (category: string) => void;
  onMealTimeChange: (mealTime: string) => void;
}

const CategoryFilter = ({ 
  activeCategory, 
  activeMealTime,
  onCategoryChange, 
  onMealTimeChange 
}: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="font-medium text-recipe-secondary mb-2">Categories</h3>
        <div className="overflow-x-auto py-1">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`category-pill px-4 py-2 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-recipe-primary text-white"
                    : "bg-muted hover:bg-recipe-accent text-recipe-dark"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-recipe-secondary mb-2">Meal Times</h3>
        <div className="overflow-x-auto py-1">
          <div className="flex space-x-2 min-w-max">
            {mealTimes.map((mealTime) => (
              <button
                key={mealTime}
                onClick={() => onMealTimeChange(mealTime)}
                className={`category-pill px-4 py-2 whitespace-nowrap ${
                  activeMealTime === mealTime
                    ? "bg-recipe-secondary text-white"
                    : "bg-muted hover:bg-recipe-accent text-recipe-dark"
                }`}
              >
                {mealTime}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
