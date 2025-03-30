
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-recipe-secondary text-white py-8 px-6 mt-16 no-print">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-heading font-semibold mb-4">TastyBytes</h3>
            <p className="text-white/80 max-w-xs">
              Discover delicious recipes that bloom with flavor. Perfect for home cooks and food enthusiasts.
            </p>
          </div>
          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-heading font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Pinterest
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} TastyBytes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
