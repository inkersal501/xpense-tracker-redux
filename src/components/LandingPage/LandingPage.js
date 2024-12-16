import React from 'react'
import Form from './Form';
import PageHeader from '../PageHeader';

function LandingPage() {
  return (
    <div className='page'>
        <PageHeader />
        <main>
          <Form />
        </main>        
    </div>
  )
}

export default LandingPage;