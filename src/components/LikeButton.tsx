
import { useState } from "react";
import { Heart } from "lucide-react";
import { Recipe } from "@/data/recipes";

interface LikeButtonProps {
  recipe: Recipe;
  size?: "sm" | "md" | "lg";
  onLike?: (id: string, newLikeCount: number) => void;
}

const LikeButton = ({ recipe, size = "md", onLike }: LikeButtonProps) => {
  const [likes, setLikes] = useState(recipe.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    const newLikeCount = isLiked ? likes - 1 : likes + 1;
    setLikes(newLikeCount);
    setIsLiked(!isLiked);
    
    if (onLike) {
      onLike(recipe.id, newLikeCount);
    }
  };

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <button 
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation when inside a link
        e.stopPropagation(); // Prevent event bubbling
        handleLike();
      }}
      className={`flex items-center gap-1 ${sizeClasses[size]} transition-all duration-300`}
      aria-label={isLiked ? "Unlike recipe" : "Like recipe"}
    >
      <Heart 
        className={`transition-colors duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`} 
        size={size === "lg" ? 22 : size === "md" ? 18 : 16} 
      />
      <span className={isLiked ? "text-red-500" : "text-gray-500"}>
        {likes}
      </span>
    </button>
  );
};

export default LikeButton;
