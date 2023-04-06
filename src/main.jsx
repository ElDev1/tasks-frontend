import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import App from './App'
import ErrorPage from './components/errorPage/ErrorPage'

const RequiredAuth = ({ children }) => {
  // eslint-disable-next-line no-undef
  if (!localStorage.getItem('token')) {
    // eslint-disable-next-line react/jsx-boolean-value
    return <Navigate to='/login' replace={true} />
  }
  return children
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequiredAuth> <App /> </RequiredAuth>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
