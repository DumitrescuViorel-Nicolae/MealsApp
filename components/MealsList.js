import React from "react";
import MealItem from "./MealItem";
import { View, FlatList, StyleSheet, Text } from "react-native";

const MealsList = ({ items }) => {
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
      {items.length === 0 ? (
        <Text style={styles.text}>No favorite meals selected</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderMeal}
        />
      )}
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
});
