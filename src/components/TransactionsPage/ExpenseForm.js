import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {updateExpenseName, updateCategory, updateExpenseAmt, addExpenses, updateCategoricalExpense} from "../../redux/expenseSlice";
import { categories } from '../../categories';
import toast from 'react-hot-toast';

function ExpenseForm() {

    const dispatch = useDispatch();

    const expense_name = useSelector((state) => state.expense.expense_name);
    const category = useSelector((state) => state.expense.category);
    const expense_amt = useSelector((state) => state.expense.expense_amt);
    const categoricalExpense = useSelector((state) => state.expense.categoricalExpense);

    const validateForm = () => {
        let alertMsg = ""; 
        if(expense_name === "" )
            alertMsg = "Please Enter Expense Name";
        else if(category === "")
            alertMsg = "Select Category";
        else if(expense_amt === "")
            alertMsg = "Please Enter Expense Amount";
        else if(expense_amt !== "" && expense_amt === 0)
            alertMsg = "Expense Amount should be greater than 0";

        if(alertMsg !== "")
            toast.error(alertMsg);
        else
            return true;
        
        return false;
    };
    const handleSubmit = (e) => {
        e.preventDefault();  
        if(validateForm()){
            if(window.confirm("Do you want to add new Expense?")){
                const totalExpense = parseInt(expense_amt)+parseInt(categoricalExpense[category]);
                dispatch(addExpenses({_id: Date.now(), expense_name, category, expense_amt}));
                dispatch(updateCategoricalExpense({[category]: totalExpense}));
                toast.success("Expense added successfully");

                dispatch(updateExpenseName(""));
                dispatch(updateCategory(""));
                dispatch(updateExpenseAmt(""));
            }            
        }
    };
    return (
        <div style={{margin: "40px 0px"}}>
            <h3 className='title'>New Expense Form</h3>
            <form onSubmit={handleSubmit} className='expense-form1'>
                <div style={{display:"flex", gap:"40px",}}>
                    <div>
                        <label htmlFor='expense-name'>Expense Name:</label>
                        <input type="text" id="expense-name" onChange={(e)=>dispatch(updateExpenseName(e.target.value))} value={expense_name} className='formInput'/>
                    </div>
                    <div>
                        <label htmlFor='category-select'>Select Category:</label>
                        <select id="category-select" onChange={(e)=>dispatch(updateCategory(e.target.value))} value={category} className='formInput'>
                            <option value={""}>--select--</option>
                            {categories.map((cat, index)=>(
                                <option key={index} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='expense-amount'>Expense Amount:</label>
                        <input type="text" id="expense-amount" onChange={(e)=>dispatch(updateExpenseAmt(e.target.value))} value={expense_amt} className='formInput'/>
                    </div>
                </div>
                <div className='text-center pt-1'>
                    <button type="submit" className='btn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;