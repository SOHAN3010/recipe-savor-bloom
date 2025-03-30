
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Book, Utensils, Users, Heart, Bookmark, Search } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-recipe-secondary mb-6 text-center">
            About TastyBytes
          </h1>
          
          <div className="mb-12 text-center">
            <p className="text-xl text-recipe-dark/90 mb-6">
              Welcome to TastyBytes, your ultimate destination for culinary inspiration and gastronomic adventures.
            </p>
            <div className="w-24 h-1 bg-recipe-primary mx-auto"></div>
          </div>
          
          <section className="mb-16">
            <h2 className="text-2xl font-heading font-semibold text-recipe-secondary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-recipe-dark/80 mb-4">
              TastyBytes was created with a simple goal: to make cooking accessible, enjoyable, and creative for everyone, 
              from busy professionals to passionate home chefs. We believe that good food brings people together and 
              creates lasting memories.
            </p>
            <p className="text-lg text-recipe-dark/80">
              Our platform is designed to inspire you with a diverse collection of recipes, from quick weeknight dinners 
              to impressive weekend feasts, ensuring there's something for every taste and occasion.
            </p>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-heading font-semibold text-recipe-secondary mb-6">
              What We Offer
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Book className="text-recipe-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Diverse Recipes</h3>
                </div>
                <p className="text-recipe-dark/80">
                  Explore a wide range of cuisines and dishes, from traditional classics to innovative creations, all with detailed instructions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Utensils className="text-recipe-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Cooking Tips</h3>
                </div>
                <p className="text-recipe-dark/80">
                  Find helpful techniques, ingredient substitutions, and chef secrets to elevate your cooking skills.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Search className="text-recipe-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Easy Search</h3>
                </div>
                <p className="text-recipe-dark/80">
                  Quickly find recipes by ingredients, cuisine, difficulty level, or preparation time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Users className="text-recipe-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Community</h3>
                </div>
                <p className="text-recipe-dark/80">
                  Join our vibrant community of food enthusiasts who share their experiences and modifications.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-heading font-semibold text-recipe-secondary mb-6">
              Features You'll Love
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Heart className="text-recipe-primary mt-1 mr-4 flex-shrink-0" size={22} />
                <div>
                  <h3 className="text-xl font-medium mb-2">Personal Recipe Collection</h3>
                  <p className="text-recipe-dark/80">
                    Upload and manage your own recipes, keeping all your favorites in one place. Edit them anytime as you perfect your techniques.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Bookmark className="text-recipe-primary mt-1 mr-4 flex-shrink-0" size={22} />
                <div>
                  <h3 className="text-xl font-medium mb-2">Save Your Favorites</h3>
                  <p className="text-recipe-dark/80">
                    Bookmark recipes you love for quick access later. Create your own culinary library tailored to your taste.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-heading font-semibold text-recipe-secondary mb-6">
              Join Our Culinary Journey
            </h2>
            <p className="text-lg text-recipe-dark/80">
              Whether you're looking for quick meal ideas, planning a special dinner, or exploring new cuisines, 
              TastyBytes is here to guide and inspire you. Start exploring our recipes today and transform your 
              cooking experience!
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
