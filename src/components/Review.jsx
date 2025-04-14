import React from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const reviews = [
    {
      name: "Sophia Azura",
      rating: 5,
      text: "A culinary masterpiece! The flavors were exquisite, and the service was impeccable. A truly unforgettable dining experience.",
    },
    {
      name: "John Deo",
      rating: 4,
      text: "The food was delicious, and the atmosphere was cozy. However, I felt the portions were a bit small for the price.",
    },
    {
      name: "Victoria Zoe",
      rating: 5,
      text: "Every dish was a work of art! The attention to detail and the quality of the ingredients were outstanding. Highly recommended.",
    },
    {
      name: "Carlos Rivera",
      rating: 4,
      text: "Great food and friendly staff. I enjoyed the overall experience and will definitely come back.",
    },
    {
      name: "Sophie Laurent",
      rating: 5,
      text: "Absolutely loved everything! The food, the service, the ambiance - everything was perfect. A must-try!",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-sm ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 md:px-32">
      <h1 className="pt-24 pb-10 text-4xl font-semibold text-center lg:pt-16">
        Guest Testimonials
      </h1>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <div className="flex">{renderStars(review.rating)}</div>
            </div>
            <p className="leading-relaxed text-gray-700">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;