import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateEditMonthlyBudget } from '../../redux/userSlice';

function Header() {

    const navigate = useNavigate();
    const username = useSelector((state) => state.user.username);
    const dispatch = useDispatch();

    return (
        <div className='p-2'>
            <div style={{display:'flex', justifyContent:"space-between"}}>
                <h2> {username}'s Monthly Expenditure</h2>
                <button type="button" id="new-update" onClick={()=>{dispatch(updateEditMonthlyBudget(true));navigate("/");}} className='btn'>New/Update Tracker</button>
            </div>
        </div>
    )
}

export default Header;