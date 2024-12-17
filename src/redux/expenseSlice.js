import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "expense",
    initialState: {  
        totalExpense: 0,
        categoricalExpense: {
            food : 0,
            travel : 0,
            entertainment : 0,
            others : 0,
        },        
    },
    reducers: {
        updateTotalExpense: (state, action) => {
            const data = action.payload;
            if(data.operation === "add"){
                state.totalExpense = state.totalExpense + Number(data.amount);
            }else{
                state.totalExpense = state.totalExpense - Number(data.amount);
            }  
        },
        updateCategoricalExpense: (state, action) => {
            const data = action.payload;
            let amount = state.categoricalExpense[data.category];
            if(data.operation === "add"){
                amount = amount + Number(data.amount);
            }else{
                amount = amount - Number(data.amount);
            } 
            state.categoricalExpense =  {...state.categoricalExpense, [data.category]: amount };
        },
        resetAllExpense: (state, action) => {
            state.categoricalExpense = {...state.categoricalExpense, ...action.payload};
        }, 
    }
});
export const { updateTotalExpense, updateCategoricalExpense, resetAllExpense } = expenseSlice.actions;
export default expenseSlice.reducer;