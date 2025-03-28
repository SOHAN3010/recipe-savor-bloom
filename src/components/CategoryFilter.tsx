
import { categories } from "@/data/recipes";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="mb-8 overflow-x-auto py-1">
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
  );
};

export default CategoryFilter;
