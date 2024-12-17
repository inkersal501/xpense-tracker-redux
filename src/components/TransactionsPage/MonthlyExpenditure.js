import React from 'react';
import { categories } from '../../categories';
import { useSelector } from 'react-redux';



function MonthlyExpenditure() {

    const monthlyBudget = useSelector((state)=> state.user.monthlyBudget);
    const totalExpense  = useSelector((state)=> state.expense.totalExpense);
    const categoricalBudget = useSelector((state)=> state.user.categoricalBudget);  
    
    
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
                        <td></td>
                        <td>{monthlyBudget}</td>
                        <td>{totalExpense}</td>
                        <td>{""}</td>
                    </tr>
                    {categories.map((cat, index)=>(
                        <tr key={index}>
                            <td>{cat.name}</td>
                            <td></td>
                            <td>{categoricalBudget[cat.id]}</td>
                            <td>{""}</td>
                            <td></td>
                        </tr> 
                    ))}
                    <tr>
                        <td>Others</td>
                        <td></td>
                        <td>{monthlyBudget}</td>
                        <td>{""}</td>
                        <td>{""}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MonthlyExpenditure;