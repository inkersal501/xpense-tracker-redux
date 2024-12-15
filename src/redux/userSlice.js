import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: "user",
    initialState: {
        username : "",
        monthlyBudget : "",
        categoricalBudget: {
            food :"",
            travel :"",
            entertainment :"",
            others :"",
        }
    },
    reducers: {
        updateUsername: (state, action) => {
            state.username = action.payload; 
        },
        updateMonthlyBudget: (state, action) => {
            state.monthlyBudget = action.payload; 
        },
        updateCategoricalBudget: (state, action) => {
            state.categoricalBudget = {...state.categoricalBudget, ...action.payload}; 
        },
    }

});
export const { updateUsername, updateMonthlyBudget, updateCategoricalBudget } = userSlice.actions;
export default userSlice.reducer;