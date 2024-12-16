import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const username = useSelector((state) => state.user.username);

    return (
        <div className='p-2'>
            <div style={{display:'flex', justifyContent:"space-between"}}>
                <h3> {username}'s Monthly Expenditure</h3>
                <button type="button" onClick={()=>navigate("/")} className='btn'>New/Update Tracker</button>
            </div>
        </div>
    )
}

export default Header;