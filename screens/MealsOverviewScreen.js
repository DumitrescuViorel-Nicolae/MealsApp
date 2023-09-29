import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "../components/MealItem";

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

  function renderMeal(itemData) {
    const item = itemData.item;
    return (
      <MealItem
        id={item.id}
        detailsObj={{
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
        }}
        url={item.imageUrl}
        title={item.title}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
};
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
