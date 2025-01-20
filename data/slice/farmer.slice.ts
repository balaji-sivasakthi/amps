import { db } from '@/db';
import { Farmer, FarmerResult, farmersTable } from '@/db/schema/farmers';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ObjectId from 'bson-objectid';
import { eq } from 'drizzle-orm';

interface FarmerState {
  status: 'idle' | 'loading' | 'failed';
  farmers: FarmerResult[];
  error: Error | null;
}

export const createFarmer = createAsyncThunk(
  'farmer/addFarmer',
  async (newFarmer: Farmer, thunkAPI) => {
    try {
      const newObjectId = new ObjectId().toString();
      const result = await db
        .insert(farmersTable)
        .values({
          ...newFarmer,
          id: newObjectId.toString(),
        })
        .returning();
      await new Promise((res, rej) => setTimeout(res, 500));
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

export const updateFarmer = createAsyncThunk(
  'farmer/updateFarmer',
  async (newFarmer: Farmer, thunkAPI) => {
    try {
      const results = await db
        .update(farmersTable)
        .set({
          name: newFarmer.name,
          mobile: newFarmer.mobile,
          updated_at: new Date().toISOString(),
        })
        .where(eq(farmersTable.id, newFarmer?.id ?? ''))
        .returning();
      return results;
    } catch (err) {
      console.log('ex', err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteFarmer = createAsyncThunk(
  'farmer/deleteFarmer',
  async (id: string, thunkAPI) => {
    try {
      const results = db.delete(farmersTable).where(eq(farmersTable.id, id)).returning();
      return results;
    } catch (err) {
      console.log('ex', err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState: FarmerState = {
  status: 'idle',
  farmers: [],
  error: null,
};

const handlePending = (state: FarmerState) => {
  state.status = 'loading';
};

// Utility to handle rejected state
const handleRejected = (state: FarmerState, action: { payload: unknown }) => {
  state.status = 'failed';
  state.error = action.payload as Error;
};

const farmerSlice = createSlice({
  name: 'farmer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Farmer
      .addCase(createFarmer.pending, handlePending)
      .addCase(createFarmer.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.farmers.push(payload);
      })
      .addCase(createFarmer.rejected, handleRejected)

      // Fetch Farmers
      .addCase(fetchFarmers.pending, handlePending)
      .addCase(fetchFarmers.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.farmers = payload;
      })
      .addCase(fetchFarmers.rejected, handleRejected)

      // Update Farmer
      .addCase(updateFarmer.pending, handlePending)
      .addCase(updateFarmer.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.farmers = state.farmers.map((farmer) =>
          farmer.id === payload[0].id ? payload : farmer
        ) as FarmerResult[];
      })
      .addCase(updateFarmer.rejected, handleRejected)

      // Delete Farmer
      .addCase(deleteFarmer.pending, handlePending)
      .addCase(deleteFarmer.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.farmers = state.farmers.filter((farmer) => farmer.id !== payload[0].id);
      })
      .addCase(deleteFarmer.rejected, handleRejected);
  },
});

export default farmerSlice.reducer;
