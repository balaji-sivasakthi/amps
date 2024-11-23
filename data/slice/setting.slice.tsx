import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingState {
  isConnected: boolean;
}

const initialState: SettingState = {
  isConnected: false,
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    updateSetting: (state, action: PayloadAction<SettingState>) => {
      state.isConnected = action.payload.isConnected;
    },
  },
});

export const { updateSetting } = settingSlice.actions;
export default settingSlice.reducer;
