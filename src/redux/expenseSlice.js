import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        expense_name: "",
        category: "",
        expense_amt: "",
        expenses: [],
        expenseFilterCategory : "all",
        expenseByCategory: {
            food : 0,
            travel : 0,
            entertainment : 0,
            others : 0,
        }
    },
    reducers: {
        updateExpenseName : (state, action) => {
            state.expense_name = action.payload;
        },
        updateCategory : (state, action) => {
            state.category = action.payload;
        },
        updateExpenseAmt : (state, action) => {
            state.expense_amt = action.payload;
        },
        addExpenses : (state, action) => {
            state.expenses = [...state.expenses, action.payload];
        },
        addExpenseByCategory: (state, action) => {
            state.expenseByCategory = {...state.expenseByCategory, ...action.payload};
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
export const {updateExpenseName, updateCategory, updateExpenseAmt, 
    addExpenses, addExpenseByCategory, updateExpenseFilterCategory, deleteExpense} = expenseSlice.actions;
export default expenseSlice.reducer;