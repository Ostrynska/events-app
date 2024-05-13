import { combineReducers } from '@reduxjs/toolkit';

import eventsReducer from './events/slice';

const rootReducer = combineReducers({
  events: eventsReducer,
});

export default rootReducer;
