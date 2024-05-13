import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../services/events-api';

export const fetchEvents = createAsyncThunk(
  'shops/fetch-events',
  async (_, thunkAPI) => {
    try {
      const data = await api.getEvents();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  },
);

// export const fetchDrugs = createAsyncThunk(
//   'shops/fetch-drugs',
//   async (id, thunkAPI) => {
//     try {
//       const data = await api.getShopById(id);
//       return data.drugslist;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(response.data);
//     }
//   },
// );
