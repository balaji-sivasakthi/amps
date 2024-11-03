import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface AmpsCard {
  title: string;
  icon: React.ReactNode;
}

const AmpsCard = ({ title, icon }: AmpsCard) => {
  return (
    <TouchableOpacity style={styles.container}>
      {icon}
      <Text style={{
        textAlign:'center',
        marginTop:10,
        fontSize:18,
        fontWeight:'bold'
      }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius:5,
    width:'20%',
    padding: 30,
    borderColor: "#f3f3f3",
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
});

export default AmpsCard;
