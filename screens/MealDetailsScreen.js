import React, { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButon from "../components/IconButon";
const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const detailsObj = { ...selectedMeal };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButon
            icon={"star"}
            color={"yellow"}
            onTap={buttonPressHandler}
          />
        );
      },
    });
  }, [navigation, buttonPressHandler]);

  function buttonPressHandler() {}

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <View>
        <MealDetails detailsObj={detailsObj} textStyle={styles.textStyle} />
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
          {selectedMeal.ingredients.map((item) => (
            <Text style={styles.listItem} key={item}>
              {item}
            </Text>
          ))}
          <Text style={styles.subtitle}>Steps</Text>
          {selectedMeal.steps.map((item) => (
            <Text style={styles.listItem} key={item}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    padding: 6,
    textAlign: "center",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  textStyle: {
    color: "white",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    textAlign: "center",
    backgroundColor: "#e2b497",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
