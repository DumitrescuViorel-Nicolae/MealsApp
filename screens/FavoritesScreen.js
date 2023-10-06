import React, { useContext } from "react";
import { FavoritesContext } from "../Store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const FavoritesScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);
  const meals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );
  console.log(meals);
  return <MealsList items={meals} />;
};

export default FavoritesScreen;
