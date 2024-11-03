import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AmpsTextInput from "../AmpsTextInput";
import AmpsButton from "../AmpsButton";

const AddCollection = () => {
  return (
    <View style={{
        padding: 30,
    }}>
      <View style={styles.container}>
        <View style={styles.halfContainer}>
          <AmpsTextInput title="Farmer Id" />
          <AmpsTextInput style={{ marginTop: 10 }} title="Fat" />
          <AmpsTextInput style={{ marginTop: 10 }} title="SNF" />
          <AmpsTextInput style={{ marginTop: 10 }} title="KG" />
        </View>
        <View style={styles.halfContainer}>
          <AmpsTextInput title="Farmer Name" />
          <AmpsTextInput style={{ marginTop: 10 }} title="Liter" />
          <AmpsTextInput style={{ marginTop: 10 }} title="Rate/Liter" />
          <AmpsTextInput style={{ marginTop: 10 }} title="Total Rate" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AmpsButton style={{marginBottom:10}} onPress={()=>{}} variant="primary" title="Print"/>
        <AmpsButton onPress={()=>{}} variant="primary" title="Save"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  halfContainer: {
    width: "50%",
    paddingLeft: 20,
  },
  buttonContainer: {    
    padding:20,
  },
});

export default AddCollection;
