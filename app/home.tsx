import AmpsCard from "@/components/AmpsCard";
import Header from "@/components/home/Header";
import MenuCard from "@/components/home/MenuCard";
import PrimaryCards from "@/components/home/PrimaryCards";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <Header />
      <MenuCard/>
      <PrimaryCards/>
    </GestureHandlerRootView>
  );
}

