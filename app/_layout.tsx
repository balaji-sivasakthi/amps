import React, { useEffect } from 'react';
import { Slot, Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { persistor, store } from '@/data/store';
import { initConfig } from '@/config';
import { KeyboardAvoidingView } from 'react-native';

export default function RootLayout() {
  useEffect(() => {
    initConfig();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <GestureHandlerRootView
          style={{
            flex: 1,
          }}
        >
          <Stack>
            <Stack.Screen
              name="(auth)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="(screens)"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
