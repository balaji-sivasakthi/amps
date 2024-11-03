import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/home-header.png")}
        style={styles.imageBackground}
        resizeMode="cover"
        imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <View
          style={{
            padding: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcons name="menu" size={48} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name="crown-circle"
                size={24}
                color="yellow"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.headerDay}>Saturday</Text>
              <Text style={styles.headerDay}>1 Oct 2024</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={styles.headerRightCard}>
                <Text style={styles.headerDay}>Total Milk</Text>
                <Text style={styles.headerDay}>5.9 Litre</Text>
              </View>
              <View style={styles.headerRightCard}>
                <Text style={styles.headerDay}>Avg Fat</Text>
                <Text style={styles.headerDay}>3.9</Text>
              </View>
              <View style={styles.headerRightCard}>
                <Text style={styles.headerDay}>Avg SNF</Text>
                <Text style={styles.headerDay}>5.9</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      borderRadius: 10,
    },
    headerDay: {
      fontSize: 48,
      color: "#fff",
    },
    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    headerRightCard: {
      marginRight: 20,
    },
    imageBackground: {
      width: "100%",
      height: 200,
  
    },
  });
  