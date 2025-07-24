'use client';
import { useEffect, useState } from "react";
import { useMealStore } from "./store/useMealStore";
import MealCard from "./components/MealCard";
import RecipeModal from "./components/RecipeModal";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const { meals, fetchMeals, selectMeal } = useMealStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  useEffect(() => {
    AOS.init({ duration: 75 });
  }, []);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white scroll-smooth transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center drop-shadow-lg tracking-wide">
         Discover Delicious Meals
        </h1>

  
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="🔍 Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-96 p-3 px-5 rounded-full text-black shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300"
          />
        </div>

        {filteredMeals.length === 0 ? (
          <p className="text-center text-white/80 text-lg animate-pulse">
            No meals available 😕
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMeals.map((meal, index) => (
              <div
                key={meal.idMeal}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <MealCard meal={meal} onClick={() => selectMeal(meal)} />
              </div>
            ))}
          </div>
        )}
      </div>

      <RecipeModal />
    </div>
  );
}

export default App;
