import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pagas/Home'
import { Login } from '../pagas/Login'
import { Register } from '../pagas/Register'
import PrivateRoute from './PrivateRoute'

export const AllRoute = () => {
  return (
   <Routes>
    <Route 
          path="/" 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } 
        />
     
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
  )
}
