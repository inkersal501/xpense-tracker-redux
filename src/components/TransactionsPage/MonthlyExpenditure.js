import React, { useEffect } from 'react';
import { categories } from '../../categories';
import { useSelector } from 'react-redux';



function MonthlyExpenditure() {

    const monthlyBudget = useSelector((state)=> state.user.monthlyBudget);
    const monthlyExpense = 0;
    const monthlyBal = 0;
    const categoricalBudget = useSelector((state)=> state.user.categoricalBudget);
    // const expenses = useSelector((state)=> state.expense.expenses);
    const expenseByCategory = useSelector((state) => state.expense.expenseByCategory);
    useEffect(()=>{
        console.log(expenseByCategory);
    },[expenseByCategory]);
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
                        <td>{monthlyExpense}</td>
                        <td>{monthlyBal}</td>
                    </tr>
                    {categories.map((cat, index)=>(
                        <tr key={index}>
                            <td>{cat.name}</td>
                            <td></td>
                            <td>{categoricalBudget[cat.id]}</td>
                            <td>{expenseByCategory[cat.id]}</td>
                            <td></td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MonthlyExpenditure;