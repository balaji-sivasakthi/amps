import RateChart from '@/api-sdk/models/ratechart.model';
import { RateChartResponse } from '@/api-sdk/types/response.type';
import { db } from '@/db';
import { rateChartsTable } from '@/db/schema/rate-chart';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ObjectId from 'bson-objectid';
import { eq } from 'drizzle-orm';

interface RateChartState {
  status: 'idle' | 'loading' | 'failed';
  rateCharts: RateChartResponse[];
  error: Error | null;
}

export const createRateChart = createAsyncThunk(
  'rateChart/add',
  async (ratechart: Omit<RateChart, 'id'>, thunkAPI) => {
    try {
      const newObjectId = new ObjectId().toString();
      const result = await db
        .insert(rateChartsTable)
        .values({
          ...ratechart,
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

export const fetchRateChart = createAsyncThunk('rateChart/fetch', async (_, thunkAPI) => {
  try {
    const results = db.select().from(rateChartsTable).all();
    return results;
  } catch (err) {
    console.log('ex', err);
    return thunkAPI.rejectWithValue(err);
  }
});

export const updateRateChart = createAsyncThunk(
  'rateChart/update',
  async (rateChart: Partial<RateChart>, thunkAPI) => {
    try {
      const results = await db
        .update(rateChartsTable)
        .set({
          ...rateChart,
          updated_at: new Date().toISOString(),
        })
        .where(eq(rateChartsTable.id, rateChart?.id ?? ''))
        .returning();
      return results;
    } catch (err) {
      console.log('ex', err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteRateChart = createAsyncThunk(
  'rateChart/delete',
  async (id: string, thunkAPI) => {
    try {
      const results = db.delete(rateChartsTable).where(eq(rateChartsTable.id, id)).returning();
      return results;
    } catch (err) {
      console.log('ex', err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState: RateChartState = {
  status: 'idle',
  rateCharts: [],
  error: null,
};

const handlePending = (state: RateChartState) => {
  state.status = 'loading';
};

// Utility to handle rejected state
const handleRejected = (state: RateChartState, action: { payload: unknown }) => {
  state.status = 'failed';
  state.error = action.payload as Error;
};

const rateChartSlice = createSlice({
  name: 'rateChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Ratechart
      .addCase(createRateChart.pending, handlePending)
      .addCase(createRateChart.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.rateCharts.push(payload);
      })
      .addCase(createRateChart.rejected, handleRejected)

      // Fetch Ratecharts
      .addCase(fetchRateChart.pending, handlePending)
      .addCase(fetchRateChart.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.rateCharts = payload;
      })
      .addCase(fetchRateChart.rejected, handleRejected)

      // Update Ratechart
      .addCase(updateRateChart.pending, handlePending)
      .addCase(updateRateChart.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.rateCharts = state.rateCharts.map((rateChart) =>
          rateChart.id === payload[0].id ? payload : rateChart
        ) as RateChartResponse[];
      })
      .addCase(updateRateChart.rejected, handleRejected)

      // Delete Ratechart
      .addCase(deleteRateChart.pending, handlePending)
      .addCase(deleteRateChart.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.rateCharts = state.rateCharts.filter((rateChart) => rateChart.id !== payload[0].id);
      })
      .addCase(deleteRateChart.rejected, handleRejected);
  },
});

export default rateChartSlice.reducer;
