import React, { useEffect } from 'react';
import PageHeader from '../PageHeader';
import MonthlyExpenditure from './MonthlyExpenditure';
import Header from './Header';
import ExpenseForm from "./ExpenseForm";
import ExpensesList from './ExpensesList';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function TransactionsPage() {

  const monthlyBudget = useSelector((state)=> state.user.monthlyBudget);
  console.log(monthlyBudget);
  const navigate = useNavigate(); 
  useEffect(()=>{
    if(!monthlyBudget){
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyBudget]);
  
  return (
    <div className='page'>
        <PageHeader />
        <main>
          <Header />
          <hr />
          <MonthlyExpenditure />
          <hr />
          <ExpenseForm />
          <hr />
          <ExpensesList />
        </main>
    </div>
  )
}

export default TransactionsPage;