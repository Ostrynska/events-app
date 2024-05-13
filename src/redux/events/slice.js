import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents } from './operations';

const initialState = {
  items: [],
  //   drugsList: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'shops',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, store => {
        store.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchEvents.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
    //   .addCase(fetchDrugs.pending, store => {
    //     store.loading = true;
    //   })
    //   .addCase(fetchDrugs.fulfilled, (store, { payload }) => {
    //     store.loading = false;
    //     store.drugsList = payload;
    //   })
    //   .addCase(fetchDrugs.rejected, (store, { payload }) => {
    //     store.loading = false;
    //     store.error = payload;
    //   });
  },
});

export default eventsSlice.reducer;
