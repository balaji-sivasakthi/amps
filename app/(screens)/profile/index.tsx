import { ThemedView } from '@/components/common/ThemedView';
import React from 'react';
import { Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <ThemedView
      style={{
        flex: 1,
      }}
    >
      <Text>Profile Screen</Text>
    </ThemedView>
  );
}
