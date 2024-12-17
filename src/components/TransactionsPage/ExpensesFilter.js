import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveFilter } from "../../redux/userSlice";
import { categories } from '../../categories';

function ExpensesFilter() {

    const filterCategory = useSelector((state) => state.user.activeFilter);
    const dispatch = useDispatch(); 
  return (
    <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <div>
            <h4>Filters:</h4>
        </div>
        <div className='filterPills'>
            <button className={filterCategory === "all" ?'filterPill active':'filterPill'} onClick={()=>dispatch(updateActiveFilter("all"))}>All</button>
            {categories.map((cat, index)=>(
                <button key={index} onClick={()=>dispatch(updateActiveFilter(cat.id))} className={filterCategory === cat.id ?'filterPill active':'filterPill'}>{cat.name}</button>
            ))}
        </div>
    </div>
  )
}

export default ExpensesFilter;