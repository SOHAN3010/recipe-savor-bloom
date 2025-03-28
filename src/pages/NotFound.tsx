
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-recipe-secondary mb-4">404</h1>
          <p className="text-xl text-recipe-dark mb-6">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Link to="/" className="button-primary">
            Return to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
