import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import devToolsEnhancer from 'redux-devtools-expo-dev-plugin';
import reducers, { RootState } from './slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<RootState>(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
  devTools: false,
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(devToolsEnhancer()),
});

const persistor: Persistor = persistStore(store);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
