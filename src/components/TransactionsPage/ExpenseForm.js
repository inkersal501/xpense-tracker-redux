import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateTotalExpense, updateCategoricalExpense } from "../../redux/expenseSlice";

import { categories } from '../../categories';
import toast from 'react-hot-toast';
import { addTransactionEntry } from '../../redux/transactionSlice';

function ExpenseForm() {

    const dispatch = useDispatch();

    const [expenseName, setExpenseName] = useState("");
    const [category, setCategory] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const transactionList =  useSelector((state)=> state.transactions.transactionList);

    const validateForm = () => { 
        let alertMsg = ""; 
        if(expenseName === "" )
            alertMsg = "Please Enter Expense Name";
        else if(category === "")
            alertMsg = "Select Category";
        else if(expenseAmount === "")
            alertMsg = "Please Enter Expense Amount";
        else if(expenseAmount !== "" && expenseAmount === 0)
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
                const newId = (transactionList.length > 0?transactionList[transactionList.length-1].id:0) + 1;
                dispatch(addTransactionEntry({
                    id: newId, 
                    name: expenseName, 
                    amount: parseInt(expenseAmount), 
                    category: category
                }));
                const updateTotal = { amount: expenseAmount, operation: "add" };
                dispatch(updateTotalExpense(updateTotal));
                dispatch(updateCategoricalExpense({...updateTotal, category: category}));
                toast.success("Expense added successfully");
                setExpenseName("");
                setCategory("");
                setExpenseAmount("");
            }            
        }
    };
    return (
        <div style={{margin: "40px 0px"}}>            
            <form onSubmit={handleSubmit} className='expense-form1'>
                <div className='title'>New Expense Form</div>
                <div style={{display:"flex", gap:"20px", }}>
                    <div className='inputBox form-group'>
                        <label htmlFor='expense-name'>Expense Name</label>
                        <input type="text" id="expense-name" onChange={(e)=>setExpenseName(e.target.value)} value={expenseName} className='formInput' placeholder='Expense For'/>
                    </div>
                    <div className='inputBox form-group'>
                        <label htmlFor='category-select'>Category</label>
                        <select id="category-select" onChange={(e)=>setCategory(e.target.value)} value={category} className='formInput'>
                            <option value={""}>Select Category</option>
                            {categories.map((cat, index)=>(
                                <option key={index} value={cat.id}>{cat.name}</option>
                            ))}
                            <option value="others">Others</option>
                        </select>
                    </div> 
                    <div className='inputBox form-group'>
                        <label htmlFor='expense-amount'>Expense Amount</label>
                        <input type="text" id="expense-amount" onChange={(e)=>setExpenseAmount(e.target.value)} value={expenseAmount} className='formInput' placeholder='Amount'/>
                    </div>                    
                </div>                
                <div className='text-center'>
                    <button type="submit" className='btn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;