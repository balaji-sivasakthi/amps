import Header from '@/components/home/Header';
import MenuCard from '@/components/home/MenuCard';
import PrimaryCards from '@/components/home/PrimaryCards';
import { ThemedView } from '@/components/common/ThemedView';
import React from 'react';

export default function HomeScreen() {
  return (
    <ThemedView
      style={{
        flex: 1,
        backgroundColor: '#f3f3f3',
      }}
    >
      <Header />
      <MenuCard />
      <PrimaryCards />
    </ThemedView>
  );
}
