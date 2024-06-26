import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import menuReducer from './menuSlice';

const rootReducer = combineReducers({
  menu: menuReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
