import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 lg:flex-row lg:px-32">
      <div className="lg:w-1/2">
        <img src={img} alt="img" className="w-full" />
      </div>

      <div className="space-y-6 lg:pt-14 lg:w-1/2">
        <h1 className="text-4xl font-semibold text-center text-orange-600 md:text-start">
          Our Culinary Story
        </h1>
        <p className="leading-relaxed text-gray-700">
          At Culinary Canvas, we believe that food is not just sustenance, but an
          art form. Our chefs are passionate about creating dishes that are
          both visually stunning and bursting with flavor. We source only the
          freshest ingredients and use innovative techniques to craft a dining
          experience that is truly unforgettable.
        </p>
        <p className="leading-relaxed text-gray-700">
          From our carefully curated menu to our warm and inviting ambiance,
          every detail is designed to delight your senses. Whether you're
          celebrating a special occasion or simply looking for a memorable meal,
          Culinary Canvas is the perfect destination.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Explore Our Menu" />
        </div>
      </div>
    </div>
  );
};

export default About;