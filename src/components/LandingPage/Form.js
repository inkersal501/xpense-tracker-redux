import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUsername, updateMonthlyBudget, updateCategoricalBudget } from "../../redux/userSlice";
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../categories';

function Form() {

    const username = useSelector((state)=> state.user.username);
    const monthlyBudget = useSelector((state)=> state.user.monthlyBudget);
    const categoricalBudget = useSelector((state)=> state.user.categoricalBudget);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    
    const validateForm = () => {
        let alertMsg = ""; 
        let sum = categories.reduce((acc, element) => acc + parseInt(categoricalBudget[element.id]), 0);
        if(username === "" )
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
            enqueueSnackbar(alertMsg, {variant: 'error'});
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

    return (
        <div className='budgetform'>
            <div className='budgetFormDiv'>
                <h3 className='text-center'>Welcome to your own expense tracker</h3>
                <h4 className='text-center'>Please fill in the below form to start tracking</h4>
                <div className='budgetformBox'>
                    <form name="landing-page-form" onSubmit={handleSubmit}>
                        <div className='inputBox'>
                            <label>Enter your name: </label>
                            <input type="text" id="name" className='formInput' onChange={(e)=>dispatch(updateUsername(e.target.value))} value={username}/>
                        </div>
                        <div className='inputBox'>
                            <label>Enter your monthly budget: </label>
                            <input type="text" id="budget" className='formInput' onChange={(e)=>dispatch(updateMonthlyBudget(parseInt(e.target.value)))} value={monthlyBudget}/>
                        </div>
                        <div>
                            <label>Fill your monthly categorical budget: </label>
                            <table border="1" cellSpacing="0" className='table'>
                                <thead>
                                    <tr>
                                        {categories.map((cat, index)=>(
                                            <th key={index}>{cat.name}</th>
                                        ))} 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {categories.map((cat, index)=>(
                                            <td key={index}>
                                                <input type="text" id={cat.id} className='formInput' onChange={(e)=>dispatch(updateCategoricalBudget({[cat.id]: parseInt(e.target.value)}))} value={categoricalBudget[cat.id]}/>
                                            </td> 
                                        ))} 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='text-center pt-1'>
                            <button type="submit" className='btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;