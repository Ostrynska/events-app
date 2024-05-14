import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../services/events-api';

export const fetchEvents = createAsyncThunk(
  'events/fetch-events',
  async (_, thunkAPI) => {
    try {
      const data = await api.getEvents();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  },
);

export const fetchEvent = createAsyncThunk(
  'events/fetch-event',
  async (id, thunkAPI) => {
    try {
      const data = await api.getEventById(id);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  },
);
