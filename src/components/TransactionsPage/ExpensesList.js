import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ExpensesFilter from './ExpensesFilter'; 
import { removeTransactionEntry } from '../../redux/transactionSlice';
import { updateTotalExpense, updateCategoricalExpense } from '../../redux/expenseSlice';
 
function ExpensesList() {

    const transactionList = useSelector((state) => state.transactions.transactionList);
    
    const [transactions, setTransactions] = useState([...transactionList]);
    const filterCategory = useSelector((state) => state.user.activeFilter);
    const dispatch = useDispatch();
  
    useEffect(()=>{
        if(filterCategory === "all"){
            setTransactions([...transactionList]);
        }else{
            const filter = transactionList.filter((expense)=>{
                return expense.category === filterCategory;
            });
            setTransactions([...filter]);
        }        
    },[filterCategory, transactionList]);

    const deleteEntry = (id, amount, category) => {
        dispatch(removeTransactionEntry(id));
        const updateTotal = { amount, operation: "subtract" };        
        dispatch(updateTotalExpense(updateTotal));
        dispatch(updateCategoricalExpense({...updateTotal, category}));
    };

    const capitalize = (name) => {
        return name[0].toUpperCase() + name.slice(1);
    }
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
                    {transactions.map((transaction, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{transaction.name}</td>
                            <td>{capitalize(transaction.category)}</td>
                            <td>{transaction.amount}</td>
                            <td><button type='button' className='btn' onClick={()=>deleteEntry(transaction.id, transaction.amount, transaction.category)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExpensesList;