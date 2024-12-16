import React from 'react';
import PageHeader from '../PageHeader';
import MonthlyExpenditure from './MonthlyExpenditure';
import Header from './Header';
 
function TransactionsPage() {
  return (
    <div className='page'>
        <PageHeader />
        <main>
          <Header />
          <MonthlyExpenditure />
        </main>
    </div>
  )
}

export default TransactionsPage;