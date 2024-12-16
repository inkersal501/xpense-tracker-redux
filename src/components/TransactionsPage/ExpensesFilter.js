import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateExpenseFilterCategory } from "../../redux/expenseSlice";
import { categories } from '../../categories';

function ExpensesFilter() {

    const filterCategory = useSelector((state) => state.expense.expenseFilterCategory);
    const dispatch = useDispatch();
    const update = updateExpenseFilterCategory;
  return (
    <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <div>
            <h4>Filters:</h4>
        </div>
        <div className='filterPills'>
            <button className={filterCategory === "all" ?'filterPill active':'filterPill'} onClick={()=>dispatch(update("all"))}>All</button>
            {categories.map((cat, index)=>(
                <button key={index} onClick={()=>dispatch(update(cat.id))} className={filterCategory === cat.id ?'filterPill active':'filterPill'}>{cat.name}</button>
            ))}
        </div>
    </div>
  )
}

export default ExpensesFilter;