import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  return (
    <div className="relative w-full p-6 overflow-hidden transition-transform transform bg-white shadow-2xl lg:w-1/4 rounded-3xl hover:scale-105">
      <div className="relative">
        <img
          className="object-cover w-full rounded-2xl aspect-video"
          src={props.img}
          alt={props.title}
        />
        <div className="absolute px-3 py-1 text-sm font-semibold text-white rounded-full top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500">
          Popular
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <h3 className="text-2xl font-extrabold text-center text-gray-800">
          {props.title}
        </h3>
        <div className="flex justify-center text-yellow-500">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-700">
            {props.price}
          </h3>
          <Button
            title="Order Now"
            className="font-semibold text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
          />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;