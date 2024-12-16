import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {updateExpenseName, updateCategory, updateExpenseAmt, addExpenses, addExpenseByCategory} from "../../redux/expenseSlice";
import { categories } from '../../categories';
import toast from 'react-hot-toast';

function ExpenseForm() {

    const dispatch = useDispatch();

    const expense_name = useSelector((state) => state.expense.expense_name);
    const category = useSelector((state) => state.expense.category);
    const expense_amt = useSelector((state) => state.expense.expense_amt);
    const expenseByCategory = useSelector((state) => state.expense.expenseByCategory);

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
            const totalExpense = parseInt(expense_amt)+parseInt(expenseByCategory[category]);
            dispatch(addExpenses({_id: Date.now(), expense_name, category, expense_amt}));
            dispatch(addExpenseByCategory({[category]: totalExpense}))
        }
    };
    return (
        <div>
            <h4>New Expense Form</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Expense Name: </label>
                    <input type="text" id="expense_name" onChange={(e)=>dispatch(updateExpenseName(e.target.value))} value={expense_name}/>
                
                    <label>Select Category</label>
                    <select id="category" onChange={(e)=>dispatch(updateCategory(e.target.value))} value={category}>
                        <option value={""}>--select--</option>
                        {categories.map((cat, index)=>(
                            <option key={index} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                
                    <label>Expense Amount</label>
                    <input type="text" id="expense_amt" onChange={(e)=>dispatch(updateExpenseAmt(e.target.value))} value={expense_amt} />
                </div>
                <div className='text-center pt-1'>
                    <button type="submit" className='btn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;