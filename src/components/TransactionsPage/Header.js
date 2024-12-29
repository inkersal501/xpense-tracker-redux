import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateEditMonthlyBudget } from '../../redux/userSlice';

function Header() {

    const navigate = useNavigate();
    const userName = useSelector((state) => state.user.userName);
    const dispatch = useDispatch();

    return (
        <div>
            <div style={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
                <h3 style={{margin:"0px"}}> {userName}'s Monthly Expenditure</h3>
                <div>
                    <button type="button" id="new-update" onClick={()=>{dispatch(updateEditMonthlyBudget(true));navigate("/");}} className='btn'>New/Update Tracker</button>
                </div>
            </div>
        </div>
    )
}

export default Header;