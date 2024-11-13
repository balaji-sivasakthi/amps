import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FarmerState {
  farmerName?: string;
}

const initialState: FarmerState = {
  farmerName: undefined,
};

const farmerSlice = createSlice({
  name: "farmer",
  initialState,
  reducers: {
    addFarmer: (state, action: PayloadAction<FarmerState>) => {
      state.farmerName = action.payload.farmerName;
    },
  },
});

export const { addFarmer } = farmerSlice.actions;
export default farmerSlice.reducer;
