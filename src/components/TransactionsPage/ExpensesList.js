import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ExpensesFilter from './ExpensesFilter';
import { deleteExpense } from '../../redux/expenseSlice';

function ExpensesList() {

    const expenses = useSelector((state) => state.expense.expenses);
    
    const [dExpenses, setDExpenses] = useState([...expenses]);
    const filterCategory = useSelector((state) => state.expense.expenseFilterCategory);
    const dispatch = useDispatch();
    // const
    useEffect(()=>{
        if(filterCategory === "all"){
            setDExpenses([...expenses]);
        }else{
            const filter = expenses.filter((expense)=>{
                return expense.category === filterCategory;
            });
            setDExpenses([...filter]);
        }        
    },[filterCategory, expenses]);
    return (
        <div>
            <ExpensesFilter />
            <table className='table' cellSpacing="0" border="1">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Transaction</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dExpenses.map((expense, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{expense.expense_name}</td>
                            <td>{expense.category}</td>
                            <td>{expense.expense_amt}</td>
                            <td><button type='button' className='btn' onClick={()=>dispatch(deleteExpense(expense._id))}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExpensesList;