
import { useState } from "react";
import { Info } from "lucide-react";
import { 
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover";

interface IngredientSubstitutionProps {
  ingredient: string;
  substitutions: string[];
}

const IngredientSubstitution = ({ ingredient, substitutions }: IngredientSubstitutionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!substitutions || substitutions.length === 0) {
    return null;
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button 
          className="ml-2 text-recipe-primary hover:text-recipe-secondary transition-colors"
          aria-label="Show ingredient substitutions"
        >
          <Info size={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4">
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-recipe-secondary">Substitutions for:</h4>
          <p className="text-sm font-semibold">{ingredient}</p>
          <ul className="space-y-1 mt-2">
            {substitutions.map((sub, index) => (
              <li key={index} className="text-sm flex items-center">
                <span className="mr-2">•</span> {sub}
              </li>
            ))}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default IngredientSubstitution;
