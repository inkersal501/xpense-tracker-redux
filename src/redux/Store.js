import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice";
import expenseSlice from "./expenseSlice";
import transactionSlice from './transactionSlice';

const store = configureStore({
  reducer: {
    user : userSlice,
    expense : expenseSlice,
    transactions : transactionSlice,
  },
});

export default store;