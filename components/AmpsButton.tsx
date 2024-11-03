import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";


interface AmpsButtonProps {
  onPress:()=> void
}

const AmpsButton = ({onPress}:AmpsButtonProps) => {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={onPress}>
      <Text style={styles.submitButtonText}> Submit </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: Colors.light.primaryColor,
    padding: 10,
    borderRadius:5,
    height: 55,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
});
export default AmpsButton;
