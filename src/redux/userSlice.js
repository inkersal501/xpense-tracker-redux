import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: "user",
    initialState: {
        userName : "",
        monthlyBudget : "",
        categoricalBudget: {
            food :"",
            travel :"",
            entertainment :"",
        },
        editMonthlyBudget: false,
        activeFilter: "all",
    },
    reducers: {
        updateUserName: (state, action) => { 
            state.userName = action.payload; 
        },
        updateMonthlyBudget: (state, action) => {
            state.monthlyBudget = action.payload; 
        },
        updateCategoricalBudget: (state, action) => {
            state.categoricalBudget = {...state.categoricalBudget, ...action.payload}; 
        },
        updateEditMonthlyBudget: (state, action) => {
            state.editMonthlyBudget = action.payload; 
        },
        updateActiveFilter: (state, action) => {
            state.activeFilter = action.payload; 
        },
        resetAllBudget: (state, action) => {
            state.username = "";
            state.monthlyBudget = "";
            state.categoricalBudget = {
                food :"",
                travel :"",
                entertainment :"",
            };
        },
    }

});
export const { updateUserName, updateMonthlyBudget, updateCategoricalBudget, updateEditMonthlyBudget, updateActiveFilter, resetAllBudget } = userSlice.actions;
export default userSlice.reducer;