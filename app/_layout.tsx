import React from 'react';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/context/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Stack>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="index"
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="home"
          />
          <Stack.Screen
            options={{
              title: 'Collection',
              headerStyle: {
                backgroundColor: '#003713',
              },
              headerTintColor: '#fff',
            }}
            name="collect"
          />
          <Stack.Screen
            options={{
              title: 'Report',
              headerStyle: {
                backgroundColor: '#003713',
              },
              headerTintColor: '#fff',
            }}
            name="report"
          />
          <Stack.Screen
            options={{
              title: 'Profile',
              headerStyle: {
                backgroundColor: '#003713',
              },
              headerTintColor: '#fff',
            }}
            name="profile"
          />
          <Stack.Screen
            options={{
              title: 'Subscription',
              headerStyle: {
                backgroundColor: '#003713',
              },
              headerTintColor: '#fff',
            }}
            name="subscription"
          />
          <Stack.Screen
            options={{
              title: 'Farmer',
              headerStyle: {
                backgroundColor: '#003713',
              },
              headerTintColor: '#fff',
            }}
            name="farmer"
          />
          <Stack.Screen
            options={{
              title: 'Rate Chart',
              headerStyle: {
                backgroundColor: '#003713',
              },
              headerTintColor: '#fff',
            }}
            name="rate-chart"
          />
        </Stack>
      </PersistGate>
    </Provider>
  );
}
