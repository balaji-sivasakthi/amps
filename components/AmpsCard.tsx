import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface AmpsCard {
  title: string;
  icon: React.ReactNode;
  onPress: ()=>void;
}

const AmpsCard = ({ title, icon, onPress }: AmpsCard) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
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
    borderColor: "#D9D9D9",
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
});

export default AmpsCard;
