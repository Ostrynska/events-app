export const getEvents = state => state.events.items;

export const getEvent = state => state.events.event;

// export const getDrugsList = state => state.shops.drugsList;

export const getLoading = ({ events }) => events.loading;

export const getError = state => state.events.error;
