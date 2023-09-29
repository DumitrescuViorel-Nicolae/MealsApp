import React, { useContext } from "react";
import { Text, View } from "react-native";
import { FavoritesContext } from "../Store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);

  return (
    <View>
      {favoriteMealsContext.ids.map((id) => (
        <Text key={id}>{MEALS.find((meal) => meal.id === id).title}</Text>
      ))}
    </View>
  );
};

export default FavoritesScreen;
