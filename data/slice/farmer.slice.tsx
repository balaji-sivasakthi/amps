import Farmer from '@/api-sdk/models/farmer.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FarmerState {
  status: 'idle' | 'loading' | 'failed';
  farmers: Farmer[];
  error: null;
}

const initialState: FarmerState = {
  status: 'idle',
  farmers: [],
  error: null,
};

const farmerSlice = createSlice({
  name: 'farmer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const { addFarmer } = farmerSlice.actions;
export default farmerSlice.reducer;
