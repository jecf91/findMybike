import { createAsyncThunk } from '@reduxjs/toolkit';
import { BikeArray } from '../../Models/Bike';
import { getAllBikes } from '../../services/bikes';

type FetchError = {
  message: string;
};

export const fetchBikes = createAsyncThunk<
  BikeArray,
  string,
  { rejectValue: FetchError }
>('getBikes/fetch', async (query, thunkApi) => {
  try {
    const response = await getAllBikes(query);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue({ message: 'Failed to fecth' });
  }
});
