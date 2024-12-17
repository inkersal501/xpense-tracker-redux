import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ExpensesFilter from './ExpensesFilter'; 
import { removeTransactionEntry } from '../../redux/transactionSlice';
import { updateTotalExpense } from '../../redux/expenseSlice';
 
function ExpensesList() {

    const transactionList = useSelector((state) => state.transaction.transactionList);
    
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

    const deleteEntry = (id, amount) => {
        dispatch(removeTransactionEntry(id));
        dispatch(updateTotalExpense({amount, operation: "subtract"}));
    };
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
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                            <td><button type='button' className='btn' onClick={()=>deleteEntry(transaction.id, transaction.amount)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExpensesList;