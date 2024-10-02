import { configureStore } from '@reduxjs/toolkit';


// Configure the Redux store
export const CustomerStore = configureStore({
  reducer: {
    customers: [],
  },
});
