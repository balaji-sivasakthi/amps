import AddCollection from '@/components/collect/AddCollection';
import { ThemedView } from '@/components/common/ThemedView';
import React from 'react';

export default function CollectScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <AddCollection />
    </ThemedView>
  );
}
