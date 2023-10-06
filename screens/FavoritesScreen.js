import React from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  //const favoriteMealsContext = useContext(FavoritesContext);
  const mealIDs = useSelector((state) => state.favoriteMeals.ids);
  console.log(mealIDs);
  const meals = MEALS.filter((meal) => mealIDs.includes(meal.id));
  return <MealsList items={meals} />;
};

export default FavoritesScreen;
