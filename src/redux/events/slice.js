import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents, fetchEvent } from './operations';

const initialState = {
  items: [],
  event: null,
  loading: false,
  error: null,
  sortCriteria: null,
  sortDirection: 'asc',
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    sortEvents(state, action) {
      const { sortBy, sortDirection } = action.payload;
      const sortedItems = [...state.items].sort((a, b) => {
        if (sortBy === 'title') {
          return sortDirection === 'asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        } else if (sortBy === 'date') {
          return sortDirection === 'asc'
            ? new Date(a.date) - new Date(b.date)
            : new Date(b.date) - new Date(a.date);
        } else if (sortBy === 'organizer') {
          return sortDirection === 'asc'
            ? a.organizer.localeCompare(b.organizer)
            : b.organizer.localeCompare(a.organizer);
        }
        return 0;
      });

      return {
        ...state,
        sortCriteria: sortBy,
        sortDirection,
        items: sortedItems,
      };
    },
  },

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
export const { sortEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
