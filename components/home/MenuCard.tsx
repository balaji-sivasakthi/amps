import { View, Image, StyleSheet } from "react-native";
import React from "react";
import AmpsCard from "../AmpsCard";

const MenuCard = () => {
  return (
    <View style={styles.container}>
      <AmpsCard
        icon={<Image source={require("./../../assets/images/collect-icon.png")} />}
        title="Collect"
      />
      <AmpsCard
        icon={<Image source={require("./../../assets/images/report-icon.png")} />}
        title="Report"
      />
      <AmpsCard
        icon={<Image source={require("./../../assets/images/profile-icon.png")} />}
        title="Profile"
      />
      <AmpsCard
        icon={<Image source={require("./../../assets/images/subscription-icon.png")} />}
        title="Subscription"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding:40
  },
});

export default MenuCard;
