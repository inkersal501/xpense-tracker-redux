import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import TransactionsPage from './components/TransactionsPage/TransactionsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/tracker",
    element: <TransactionsPage />
  },
]);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App;