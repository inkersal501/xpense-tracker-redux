import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        transactionList:[]
    },
    reducers: {
        addTransactionEntry: (state, action) => {
            state.transactionList = [...state.transactionList, action.payload];
        },
        removeTransactionEntry: (state, action) => {
            const deleteId = action.payload;
            state.transactionList = state.transactionList.filter((transaction)=>{
                return deleteId !== transaction.id;
            });
        },
        removeAllTransactions: (state, action) => {
            state.transactionList = [];
        }
    }

});

export const {addTransactionEntry, removeAllTransactions, removeTransactionEntry} = transactionSlice.actions;
export default transactionSlice.reducer;