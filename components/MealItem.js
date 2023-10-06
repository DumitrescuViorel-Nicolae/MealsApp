import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({ id, title, url, detailsObj }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={handlePress}
      >
        <View>
          <Image source={{ uri: url }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails detailsObj={detailsObj} />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
