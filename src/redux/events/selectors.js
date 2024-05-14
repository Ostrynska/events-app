export const getEvents = state => state.events.items;

export const getSortCriteria = state => state.events.sortCriteria;

export const getSortDirection = state => state.events.sortDirection;

export const getEvent = state => state.events.event;

export const getLoading = ({ events }) => events.loading;

export const getError = state => state.events.error;
