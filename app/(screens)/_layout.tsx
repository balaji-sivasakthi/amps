import React from 'react';
import { router, Slot, Stack } from 'expo-router';
import { Button, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.push('/(screens)/farmers/add-farmer');
              }}
            >
              <MaterialIcons name="add-box" size={50} color="white" />
            </TouchableOpacity>
          ),
        }}
        name="farmers/index"
      />
      <Stack.Screen
        options={{
          title: 'Add Farmer',
          headerStyle: {
            backgroundColor: '#003713',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
        name="farmers/add-farmer"
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
