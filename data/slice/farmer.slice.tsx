import Farmer from '@/api-sdk/models/farmer.model';
import { FarmerResponse } from '@/api-sdk/types/farmer.type';
import { db } from '@/db';
import { farmersTable } from '@/db/schema/farmers';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ObjectId from 'bson-objectid';

interface FarmerState {
  status: 'idle' | 'loading' | 'failed';
  farmers: FarmerResponse[];
  error: Error | null;
}

export const createFamer = createAsyncThunk(
  'farmer/addFarmer',
  async (newFarmer: Omit<Farmer, 'farmer_id' | 'id'>, thunkAPI) => {
    try {
      const newObjectId = new ObjectId().toString();
      const result = await db
        .insert(farmersTable)
        .values({
          mobile: newFarmer.mobile,
          name: newFarmer.name,
          id: newObjectId.toString(),
        })
        .returning();

      return result[0];
    } catch (err) {
      console.log('ex', err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchFarmers = createAsyncThunk('farmer/fetchFarmers', async (_, thunkAPI) => {
  try {
    const results = db.select().from(farmersTable).all();
    return results;
  } catch (err) {
    console.log('ex', err);
    return thunkAPI.rejectWithValue(err);
  }
});

const initialState: FarmerState = {
  status: 'idle',
  farmers: [],
  error: null,
};

const farmerSlice = createSlice({
  name: 'farmer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createFamer.fulfilled, (state, action) => {
      state.status = 'idle';
      state.farmers.push(action.payload);
    });
    builder.addCase(createFamer.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(createFamer.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload as unknown as Error;
    });
    builder.addCase(fetchFarmers.fulfilled, (state, action) => {
      state.status = 'idle';
      state.farmers = action.payload;
    });
    builder.addCase(fetchFarmers.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchFarmers.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload as unknown as Error;
    });
  },
});

export default farmerSlice.reducer;
