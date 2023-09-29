import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({ detailsObj, style, textStyle }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.textDetails, textStyle]}>
        {detailsObj.duration}m
      </Text>
      <Text style={[styles.textDetails, textStyle]}>
        {detailsObj.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.textDetails, textStyle]}>
        {detailsObj.affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    padding: 8,
  },
  textDetails: {
    fontSize: 12,
  },
});
