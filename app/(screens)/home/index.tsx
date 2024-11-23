import AmpsCard from '@/components/common/AmpsCard';
import Header from '@/components/home/Header';
import MenuCard from '@/components/home/MenuCard';
import PrimaryCards from '@/components/home/PrimaryCards';
import { ThemedView } from '@/components/common/ThemedView';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <ThemedView>
      <Header />
      <MenuCard />
      <PrimaryCards />
    </ThemedView>
  );
}
