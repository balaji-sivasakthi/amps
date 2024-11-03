import AmpsButton from "@/components/AmpsButton";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

export default function Auth() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.leftHalf} />
      <View style={styles.rightHalf} />
      <View style={styles.content}>
        <View
          style={{
            flex: 1,
            padding: 20,
          }}
        >
          <Image
            style={styles.logoImage}
            source={require("../assets/images/icon.png")}
          />
          <Text
            style={{
              fontSize: 28,
            }}
          >
            Get Started
          </Text>
          <Text
            style={{
              marginBottom: 30,
            }}
          >
            Welcome to Milk Collecting App - Let's Login In{" "}
          </Text>
          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid="transparent"
            placeholder="User Name"
            placeholderTextColor={Colors.light.primaryColor}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor={Colors.light.primaryColor}
            autoCapitalize="none"
          />

          <AmpsButton
            title="Submit"
            variant="primary"
            onPress={() => {
              router.push("/home");
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <LinearGradient
            colors={[
              "#000403",
              "#034A1B",
              "#03521D",
              "#03521D",
              "#011408",
              "#011408",
            ]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
          >
            <View>
              <Text style={styles.textStyle}>
                "Transforming dairy with smart, sustainable milk management for
                a connected future."
              </Text>
            </View>
            <Image
              style={styles.heroImage}
              source={require("../assets/images/milk-hero.png")}
            />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    position: "relative",
  },
  inputStyle: {
    fontSize: 18,
    marginBottom: 10,
    height: 55,
    paddingLeft: 10,
    borderColor: Colors.light.primaryColor,
    borderRadius: 5,
    borderWidth: 1.5,
  },
  logoImage: {
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  heroImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  leftHalf: {
    flex: 1,
  },
  rightHalf: {
    flex: 1,
  },
  textStyle: {
    fontSize: 48,
    color: "#fff",
  },
  content: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
