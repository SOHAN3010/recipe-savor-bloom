
import { Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="bg-recipe-light py-4 px-6 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="text-3xl font-heading font-bold text-recipe-secondary mb-4 md:mb-0">
          <span className="text-recipe-primary">Savor</span>Bloom
        </Link>
        
        <div className="flex items-center gap-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search recipes..."
              className="pl-10 pr-4 py-2 rounded-full border border-recipe-accent focus:outline-none focus:border-recipe-primary w-full min-w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute left-3 top-2.5 text-recipe-secondary">
              <Search size={18} />
            </button>
          </form>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-recipe-secondary hover:text-recipe-primary transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-recipe-secondary hover:text-recipe-primary transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="text-recipe-secondary hover:text-recipe-primary transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
