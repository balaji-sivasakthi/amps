import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/home-header.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <View>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcons name="menu" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
  },
  imageBackground: {
    width: "100%",
    height: 200,
  },
});
