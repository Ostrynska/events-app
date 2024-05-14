import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents, fetchEvent } from './operations';

const initialState = {
  items: [],
  event: null,
  participants: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, store => {
        store.loading = true;
        store.event = null;
      })
      .addCase(fetchEvents.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchEvents.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
        store.event = null;
      })
      .addCase(fetchEvent.pending, store => {
        store.loading = true;
      })
      .addCase(fetchEvent.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.event = payload;
      })
      .addCase(fetchEvent.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default eventsSlice.reducer;
