import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn?: boolean;
  userInfo?: string;
  token?: string;
}

const initialState: AuthState = {
  isLoggedIn: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAuth: (state, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { addAuth } = authSlice.actions;
export default authSlice.reducer;
