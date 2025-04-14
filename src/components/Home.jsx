import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-start lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat bg-center before:absolute before:inset-0 before:bg-black before:opacity-50 before:z-0">
      <div className="relative z-10 w-full space-y-8 text-white lg:w-2/3">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Elevate Your <span className="text-yellow-400">Inner Foodie</span> <br />
            With Every Bite.
          </h1>
          
          <p className="max-w-2xl text-lg text-gray-200 md:text-xl">
            Discover culinary perfection where every dish tells a story. Our chefs craft 
            unforgettable experiences with fresh, locally-sourced ingredients.
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          <Button 
            title="Order Now" 
            className="px-8 py-3 font-bold text-black transition-all duration-300 transform bg-yellow-500 rounded-full hover:bg-yellow-600 hover:scale-105"
          />
          <Button 
            title="View Menu" 
            className="px-8 py-3 font-bold transition-all duration-300 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black"
          />
        </div>

        <div className="flex items-center gap-4 pt-8">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((item) => (
              <img 
                key={item}
                src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`}
                alt="Happy customer"
                className="w-12 h-12 border-2 border-yellow-400 rounded-full"
              />
            ))}
          </div>
          <div className="text-sm">
            <p className="font-medium">Join 1000+ satisfied foodies</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-gray-300">(4.9/5)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;