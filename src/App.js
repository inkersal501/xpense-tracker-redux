import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import TransactionsPage from './components/TransactionsPage/TransactionsPage';
import { Toaster } from 'react-hot-toast';
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
        <Toaster 
          position="top-center"
          reverseOrder={false} 
        />
        <RouterProvider router={router} />
    </div>
  )
}

export default App;