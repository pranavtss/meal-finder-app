import React from "react";

type Props = {
  meal: {
    strMeal: string;
    strMealThumb: string;
  };
  onClick: () => void;
};

const MealCard: React.FC<Props> = ({ meal, onClick }) => (
  <div
    className="bg-gradient-to-br from-pink-300 via-yellow-200 to-green-300 
               rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
               p-4 cursor-pointer transform hover:scale-105"
    onClick={onClick}
  >
    <img
      src={meal.strMealThumb}
      alt={meal.strMeal}
      className="rounded-xl h-80 w-full object-cover mb-3 border-4 border-white shadow"
    />
    <h3 className="text-xl font-bold text-gray-800 drop-shadow-sm text-center">
      {meal.strMeal}
    </h3>
  </div>
);

export default MealCard;
