import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AmpsImageCard from "../AmpsImageCard";

export default function PrimaryCards() {
  return (
    <View style={styles.container}>
      <AmpsImageCard
        title="Add Farmer"
        description={"Register your Farmers"}
        src={require("../../assets/images/add-farmer-icon.png")}
      />
      <AmpsImageCard
        title="Add Rate Chart"
        description={"Adjust your rate chart"}
        src={require("../../assets/images/rate-chart-icon.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
