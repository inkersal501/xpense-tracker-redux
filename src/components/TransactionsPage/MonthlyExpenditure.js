import React from 'react';
import { categories } from '../../categories';
import { useSelector } from 'react-redux';



function MonthlyExpenditure() {

    const monthlyBudget = useSelector((state)=> state.user.monthlyBudget);
    const totalExpense  = useSelector((state)=> state.expense.totalExpense);
    const categoricalExpense = useSelector((state)=> state.expense.categoricalExpense);
    const categoricalBudget = useSelector((state)=> state.user.categoricalBudget);  
    
    const getBalance = (budget, expense) => {
        return budget-expense;
    }
    const getStatus = (budget, expense) => {

        return expense<budget?"within":"not within";
    }
    const getStatusColor = (budget, expense) => {
        return expense<budget?"success-btn":"danger-btn";
    }
    
    return (
        <div className='p-2'>
            <table className='table' cellSpacing="0" border="1">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Limit Status</th>
                        <th>Budget</th>
                        <th>Expense</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>All</td>
                        <td>
                            <button className={getStatusColor(monthlyBudget, totalExpense)}>{getStatus(monthlyBudget, totalExpense)}</button>
                        </td>
                        <td>{monthlyBudget}</td>
                        <td>{totalExpense}</td>
                        <td>{getBalance(monthlyBudget, totalExpense)}</td>
                    </tr>
                    {categories.map((cat, index)=>(
                        <tr key={index}>
                            <td>{cat.name}</td>
                            <td>
                                <button className={getStatusColor(categoricalBudget[cat.id], categoricalExpense[cat.id])}>{getStatus(categoricalBudget[cat.id], categoricalExpense[cat.id])}</button>
                            </td>
                            <td>{categoricalBudget[cat.id]}</td>
                            <td>{categoricalExpense[cat.id]}</td>
                            <td>{getBalance(categoricalBudget[cat.id], categoricalExpense[cat.id])}</td>
                        </tr> 
                    ))}
                    <tr>
                        <td>Others</td>
                        <td>
                            <button className={getStatusColor(categoricalBudget.others, categoricalExpense.others)}>{getStatus(categoricalBudget.others, categoricalExpense.others)}</button>
                        </td>
                        <td>{categoricalBudget.others}</td>
                        <td>{categoricalExpense.others}</td>
                        <td>{getBalance(categoricalBudget.others, categoricalExpense.others)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MonthlyExpenditure;