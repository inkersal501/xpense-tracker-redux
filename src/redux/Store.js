import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice";
import expenseSlice from "./expenseSlice";

const store = configureStore({
  reducer: {
    user : userSlice,
    expense: expenseSlice,
  },
});

export default store;