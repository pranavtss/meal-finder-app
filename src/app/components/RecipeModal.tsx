import React, { useEffect } from "react";
import { useMealStore } from "../store/useMealStore";

const RecipeModal: React.FC = () => {
  const { selectedMeal, selectMeal } = useMealStore();

  useEffect(() => {
    document.body.style.overflow = selectedMeal ? "hidden" : "auto";
  }, [selectedMeal]);

  if (!selectedMeal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 p-6 rounded-xl w-[90%] max-w-2xl relative shadow-2xl border-4 border-yellow-300">
        <button
          className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 text-2xl hover:text-red-500"
          onClick={() => selectMeal(null)}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-3 text-center">{selectedMeal.strMeal}</h2>
        <img
          src={selectedMeal.strMealThumb}
          alt={selectedMeal.strMeal}
          className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
        />
        <p className="text-sm whitespace-pre-line max-h-[300px] overflow-auto leading-relaxed">
          {selectedMeal.strInstructions}
        </p>
      </div>
    </div>
  );
};

export default RecipeModal;
