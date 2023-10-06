import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const id = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === id
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, id]);

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(id) >= 0;
  });

  return <MealsList items={displayedMeals} />;
};
export default MealsOverviewScreen;
