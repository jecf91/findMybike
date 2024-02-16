import { createSlice } from '@reduxjs/toolkit';
import { BikeArray } from '../../Models/Bike';
import { RootState } from '../../store/store';
import { fetchBikes } from './fetchBikes';

type status = 'idle' | 'loading' | 'succeeded' | 'failed';
type error = string | null;

interface StatusError {
  status: status;
  error: error;
}

const initialState: BikeArray & StatusError = {
  bikes: [],
  status: 'idle',
  error: null,
};

export const bikeSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBikes.pending, (state, _) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchBikes.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      state.bikes = payload.bikes;
      state.error = null;
    });
    builder.addCase(fetchBikes.rejected, (state, { payload }) => {
      state.status = 'failed';
      if (payload) {
        state.error = payload.message;
      }
    });
  },
});

export const selectStatus = (state: RootState) => state.bikes.status;
export const selectBikes = (state: RootState) => state.bikes.bikes;
export const selectError = (state: RootState) => state.bikes.error;

export default bikeSlice.reducer;
