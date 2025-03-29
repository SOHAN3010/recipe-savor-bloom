
import { useState } from "react";
import { Star } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { toast } from "sonner";

interface RecipeRatingProps {
  recipe: Recipe & { rating?: number };
  size?: "sm" | "md" | "lg";
}

const RecipeRating = ({ recipe, size = "md" }: RecipeRatingProps) => {
  const [rating, setRating] = useState(recipe.rating || 0);
  const [userRating, setUserRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRate = (value: number) => {
    setRating((prevRating) => {
      // Simple average calculation for demo purposes
      const newRating = prevRating > 0 ? (prevRating + value) / 2 : value;
      return Number(newRating.toFixed(1));
    });
    setUserRating(value);
    toast.success(`You rated this recipe ${value} stars!`);
  };

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  };

  // Create an array of 5 stars
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        {stars.map((star) => (
          <button
            key={star}
            onClick={() => handleRate(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            className="focus:outline-none"
            aria-label={`Rate ${star} stars`}
          >
            <Star
              className={`${sizeClasses[size]} ${
                (hoveredRating ? hoveredRating >= star : userRating >= star || rating >= star)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              } transition-colors`}
            />
          </button>
        ))}
        <span className="ml-2 text-sm text-recipe-dark/70">
          {rating > 0 ? rating.toFixed(1) : "Not rated"}
        </span>
      </div>
    </div>
  );
};

export default RecipeRating;
