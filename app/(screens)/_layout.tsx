import React from 'react';
import { router, Stack } from 'expo-router';
import { Alert, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { db } from '@/db';
import migrations from '@/drizzle/migrations';

export default function RootLayout() {
  const { error } = useMigrations(db, migrations);
  if (error) {
    Alert.alert('DB Error', 'Migration Failed, Please ontact support team.', [
      {
        onPress: () => {},
      },
    ]);
  }
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
          title: 'Procurement',
          headerStyle: {
            backgroundColor: '#003713',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.push('/(screens)/procurements/add-procurement');
              }}
            >
              <MaterialIcons name="add-box" size={50} color="white" />
            </TouchableOpacity>
          ),
        }}
        name="procurements/index"
      />
      <Stack.Screen
        options={{
          title: 'Add Procurements',
          headerStyle: {
            backgroundColor: '#003713',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
        name="procurements/add-procurement"
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
          title: 'Add Rate Chart',
          headerStyle: {
            backgroundColor: '#003713',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
        name="rate-chart/add-rate-chart"
      />
      <Stack.Screen
        options={{
          title: 'Rate Chart',
          headerStyle: {
            backgroundColor: '#003713',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.push('/(screens)/rate-chart/add-rate-chart');
              }}
            >
              <MaterialIcons name="add-box" size={50} color="white" />
            </TouchableOpacity>
          ),
        }}
        name="rate-chart/index"
      />
    </Stack>
  );
}
