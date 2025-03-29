
import { Link } from "react-router-dom";
import { Upload, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavbarExtension = () => {
  return (
    <div className="flex gap-2">
      <Link to="/saved-recipes">
        <Button variant="ghost" className="flex items-center gap-1">
          <BookmarkCheck size={16} className="text-recipe-primary" />
          <span>Saved</span>
        </Button>
      </Link>
      <Link to="/upload-recipe">
        <Button className="flex items-center gap-1 bg-recipe-primary hover:bg-recipe-secondary text-white">
          <Upload size={16} />
          <span>Upload Recipe</span>
        </Button>
      </Link>
    </div>
  );
};

export default NavbarExtension;
