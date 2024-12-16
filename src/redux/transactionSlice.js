import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        transactionList:[]
    },
    reducers: {
        addTransactionEntry: (state, action) => {

        },
        removeTransactionEntry: (state, action) => {

        },
        removeAllTransactions: (state, action) => {

        }
    }

});

export const {addTransactionEntry, removeAllTransactions, removeTransactionEntry} = transactionSlice.actions;
export default transactionSlice;