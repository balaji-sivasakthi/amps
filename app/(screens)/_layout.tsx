import React from 'react';
import { Slot, Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
        name="home/index"
      />
      <Stack.Screen
        options={{
          title: 'Procurements',
          headerStyle: {
            backgroundColor: '#003713',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
        name="procurements/index"
      />
      <Stack.Screen
        options={{
          title: 'Report',
          headerStyle: {
            backgroundColor: '#003713',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
        name="reports/index"
      />
      <Stack.Screen
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#003713',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
        name="profile/index"
      />
      <Stack.Screen
        options={{
          title: 'Subscription',
          headerStyle: {
            backgroundColor: '#003713',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
        name="subscription/index"
      />
      <Stack.Screen
        options={{
          title: 'Farmer',
          headerStyle: {
            backgroundColor: '#003713',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
        name="farmers/index"
      />
      <Stack.Screen
        options={{
          title: 'Rate Chart',
          headerStyle: {
            backgroundColor: '#003713',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
        name="rate-chart/index"
      />
    </Stack>
  );
}
