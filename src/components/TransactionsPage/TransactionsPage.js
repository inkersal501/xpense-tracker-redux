import React from 'react';
import PageHeader from '../PageHeader';
import MonthlyExpenditure from './MonthlyExpenditure';
import Header from './Header';
import ExpenseForm from "./ExpenseForm";
import ExpensesList from './ExpensesList';

function TransactionsPage() {
  return (
    <div className='page'>
        <PageHeader />
        <main>
          <Header />
          <MonthlyExpenditure />
          <ExpenseForm />

          <ExpensesList />
        </main>
    </div>
  )
}

export default TransactionsPage;