import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName, updateMonthlyBudget, updateCategoricalBudget, updateEditMonthlyBudget, resetAllBudget } from "../../redux/userSlice";
import { useNavigate } from 'react-router-dom';
import { categories } from '../../categories';
import toast from 'react-hot-toast';

function Form() {

    const userName = useSelector((state)=> state.user.userName);
    const monthlyBudget = useSelector((state)=> state.user.monthlyBudget);
    const categoricalBudget = useSelector((state)=> state.user.categoricalBudget);
    const editMonthlyBudget = useSelector((state)=> state.user.editMonthlyBudget);

    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    
    const validateForm = () => {
        let alertMsg = ""; 
        let sum = 0;
        // eslint-disable-next-line
        for (const [key, value] of Object.entries(categoricalBudget)){          
            sum += parseInt(value);
        }

        if(userName === "" )
            alertMsg = "Please Enter Your Name";
        else if(monthlyBudget === "")
            alertMsg = "Please Enter Your Monthly Budget";
        else if(monthlyBudget !== "" && monthlyBudget === 0)
            alertMsg = "Monthly Budget should be greater than 0";
        else if(sum === 0)
            alertMsg = "Please Enter Your Monthly categorical Budget";
        else if(sum > 0 && monthlyBudget < sum)
            alertMsg = "Total Categorical budget should not exceed monthly budget";
     
        if(alertMsg !== "")
            toast.error(alertMsg);
        else
            return true;
        
        return false;
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();  
        if(validateForm()){
            navigate("/tracker");
        } 
    };

    const newTracker = () => {
        if(window.confirm("This will delete all previous transactions")){
            dispatch(resetAllBudget());
            dispatch(updateEditMonthlyBudget(false));
            toast.success("Deleted all previous transactions");
        }
    };
    return (
        <div className='budgetform'>
            <div className=''>
                <h2 className='text-center' style={{margin:"0px"}}>Welcome to your own expense tracker</h2>
                <h3 className='text-center'>Please fill in the below form to start tracking</h3>
                <div className='budgetformBox'>
                    <form name="landing-page-form" onSubmit={handleSubmit}>
                        <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
                            <div className='inputBox form-group'>
                                <label htmlFor='name'>Name </label>
                                <input type="text" id="name" className='formInput' onChange={(e)=>dispatch(updateUserName(e.target.value))} value={userName} placeholder='Enter your name'/>
                            </div>
                            <div className='inputBox form-group'>
                                <label htmlFor='budget'>Monthly Budget </label>
                                <input type="text" id="budget" className='formInput' onChange={(e)=>dispatch(updateMonthlyBudget(parseInt(e.target.value)))} value={monthlyBudget} placeholder='Enter your monthly budget'/>
                            </div>
                        </div>
                        <div>
                            <label style={{fontWeight:"bold"}}>Monthly Categorical Budget: </label>

                            <div style={{display:"flex", gap:"20px", justifyContent:"center", margin:"10px 0px"}}>
                                {categories.map((cat, index)=>(
                                     <div key={index} className='inputBox form-group'>
                                        <label htmlFor={cat.id}>{cat.name}</label>
                                        <input type="text" id={cat.id} className='formInput' onChange={(e)=>dispatch(updateCategoricalBudget({[cat.id]: parseInt(e.target.value)}))} value={categoricalBudget[cat.id]} placeholder={cat.name}/>
                                    </div> 
                                ))} 
                            </div> 
                        </div>
                        <div className='text-center'>
                            {!editMonthlyBudget ?
                                <button type="submit" className='btn'>Submit</button>
                            :
                            <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
                                <button type="submit" className='btn'>Update Budget</button>
                                <button type="button" id="clear" className='btn' onClick={()=>newTracker()}>Start new tracker</button>
                                <button type="button" className='btn' onClick={()=>navigate("/tracker")}>Go back</button>
                            </div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;