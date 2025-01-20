import { db } from '@/db';
import { Procurement, ProcurementResult, procurementsTable } from '@/db/schema/procurements';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ObjectId from 'bson-objectid';
import { eq } from 'drizzle-orm';

interface ProcurementState {
  status: 'idle' | 'loading' | 'failed';
  procurements: ProcurementResult[];
  error: Error | null;
}

export const createProcurement = createAsyncThunk(
  'procurement/add',
  async (procurement: Procurement, thunkAPI) => {
    try {
      const newObjectId = new ObjectId().toString();
      const result = await db
        .insert(procurementsTable)
        .values({
          ...procurement,
          id: newObjectId.toString(),
        })
        .returning();
      // for loading effect
      await new Promise((res, rej) => setTimeout(res, 500));
      return result[0];
    } catch (err) {
      console.log('ex', err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchProcurement = createAsyncThunk('procurement/fetch', async (_, thunkAPI) => {
  try {
    const results = db.select().from(procurementsTable).all();
    return results;
  } catch (err) {
    console.log('ex', err);
    return thunkAPI.rejectWithValue(err);
  }
});

export const updateProcurement = createAsyncThunk(
  'procurement/update',
  async (procurement: Procurement, thunkAPI) => {
    try {
      const results = await db
        .update(procurementsTable)
        .set({
          ...procurement,
          updated_at: new Date().toISOString(),
        })
        .where(eq(procurementsTable.id, procurement?.id ?? ''))
        .returning();
      return results;
    } catch (err) {
      console.log('ex', err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteProcurement = createAsyncThunk(
  'procurement/delete',
  async (id: string, thunkAPI) => {
    try {
      const results = db.delete(procurementsTable).where(eq(procurementsTable.id, id)).returning();
      return results;
    } catch (err) {
      console.log('ex', err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState: ProcurementState = {
  status: 'idle',
  procurements: [],
  error: null,
};

const handlePending = (state: ProcurementState) => {
  state.status = 'loading';
};

// Utility to handle rejected state
const handleRejected = (state: ProcurementState, action: { payload: unknown }) => {
  state.status = 'failed';
  state.error = action.payload as Error;
};

const rateChartSlice = createSlice({
  name: 'procurements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create procurement
      .addCase(createProcurement.pending, handlePending)
      .addCase(createProcurement.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.procurements.push(payload);
      })
      .addCase(createProcurement.rejected, handleRejected)

      // Fetch procurements
      .addCase(fetchProcurement.pending, handlePending)
      .addCase(fetchProcurement.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.procurements = payload;
      })
      .addCase(fetchProcurement.rejected, handleRejected)

      // Update procurement
      .addCase(updateProcurement.pending, handlePending)
      .addCase(updateProcurement.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.procurements = state.procurements.map((procurement) =>
          procurement.id === payload[0].id ? payload : procurement
        ) as ProcurementResult[];
      })
      .addCase(updateProcurement.rejected, handleRejected)

      // Delete procurement
      .addCase(deleteProcurement.pending, handlePending)
      .addCase(deleteProcurement.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.procurements = state.procurements.filter(
          (procurement) => procurement.id !== payload[0].id
        );
      })
      .addCase(deleteProcurement.rejected, handleRejected);
  },
});

export default rateChartSlice.reducer;
