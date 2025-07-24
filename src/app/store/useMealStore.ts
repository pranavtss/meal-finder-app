import { create } from "zustand";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

interface MealStore {
  meals: Meal[];
  selectedMeal: Meal | null;
  fetchMeals: () => void;
  selectMeal: (meal: Meal | null) => void;
}

export const useMealStore = create<MealStore>((set) => ({
  meals: [],
  selectedMeal: null,
  fetchMeals: async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const data = await res.json();
    set({ meals: data.meals || [] });
  },
  selectMeal: (meal) => set({ selectedMeal: meal }),
}));
