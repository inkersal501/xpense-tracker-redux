import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "expense",
    initialState: { 
        transactionList: [],
        expenseFilterCategory : "all",
        totalExpense: 0,
        categoricalExpense: {
            food : 0,
            travel : 0,
            entertainment : 0,
            others : 0,
        },
        balanceByCategory: {
            food : 0,
            travel : 0,
            entertainment : 0,
            others : 0,
        },
        
        monthlyBalance: 0,
    },
    reducers: {
        updateTotalExpense: (state, action) => {
            state.totalExpense = action.payload;
        },
        updateCategoricalExpense: (state, action) => {
            state.categoricalExpense = {
                food : 0,
                travel : 0,
                entertainment : 0,
                others : 0,
            };
        },
        resetAllExpense: (state, action) => {
            state.categoricalExpense = {...state.categoricalExpense, ...action.payload};
        },
        updateExpenseName : (state, action) => {
            state.expenseName = action.payload;
        },
        updateCategory : (state, action) => {
            state.expenseCategory = action.payload;
        },
        updateExpenseAmt : (state, action) => {
            state.expense_amt = action.payload;
        },
        transactionList : (state, action) => {
            state.expenses = [...state.expenses, action.payload];
        },
        
        updateBalanceByCategory: (state, action) => {
            state.balanceByCategory = {...state.balanceByCategory, ...action.payload};
        },
        updateMonthlyExpense : (state, action) => {
            state.monthlyExpense = action.payload;
        },
        updateMonthlyBalance : (state, action) => {
            state.monthlyBalance = action.payload;
        },
        deleteExpense: (state, action) => {
            const id = action.payload;
            state.expenses = state.expenses.filter((expense)=>{
                return expense._id !== id;
            });
            state.expenses = [...state.expenses];
        },
        updateExpenseFilterCategory : (state, action) => {
            state.expenseFilterCategory = action.payload;
        },
    }
});
export const { updateExpenseName, updateCategory, updateExpenseAmt, updateMonthlyExpense, updateMonthlyBalance,
    addExpenses, updateExpenseByCategory, updateBalanceByCategory, updateExpenseFilterCategory, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;