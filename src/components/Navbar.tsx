import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search, X, Upload, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/recipes";
import { toast } from "sonner";

interface NavbarProps {
  onSearch?: (term: string) => void;
  onCategoryChange?: (category: string) => void;
  selectedCategory?: string;
}

const Navbar = ({ 
  onSearch, 
  onCategoryChange, 
  selectedCategory = "All" 
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === "/";
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      if (isHomePage && onSearch) {
        // If we're on the home page and have an onSearch handler, use it
        onSearch(searchTerm);
      } else {
        // Otherwise navigate to home with a search query
        navigate(`/?search=${encodeURIComponent(searchTerm)}`);
        toast.success(`Searching for "${searchTerm}"`);
      }
    }
  };
  
  const handleCategoryClick = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-heading font-bold text-recipe-primary">
              Tasty<span className="text-recipe-secondary">Bytes</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {isHomePage && (
              <div className="flex items-center space-x-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-recipe-primary text-white"
                        : "text-recipe-dark hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </nav>
          
          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            <form onSubmit={handleSearchSubmit} className="hidden md:flex">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-64 pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
            
            <div className="hidden md:flex gap-2">
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
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-recipe-dark" />
              ) : (
                <Menu className="h-6 w-6 text-recipe-dark" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-full pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
            
            <div className="flex flex-col space-y-2 mb-4">
              <Link 
                to="/saved-recipes"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookmarkCheck size={18} className="text-recipe-primary" />
                <span>Saved Recipes</span>
              </Link>
              <Link 
                to="/upload-recipe"
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-recipe-primary text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Upload size={18} />
                <span>Upload Recipe</span>
              </Link>
            </div>
            
            {isHomePage && (
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-recipe-primary text-white"
                        : "text-recipe-dark hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
