import React, { useState } from 'react'
import './App.css'
import {Routes,Route, Outlet, useActionData} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Resume from './Pages/Resume'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Payment from './Pages/Payment'

const App = () => {
  return (
    <div>
    <header className=' sticky top-0'> <Navbar/></header>


    <Routes>
    <Route path='/' element={<div> <Outlet/> </div>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Project' element={<Project/>}/>
    <Route path='/resume' element={<Resume/>}/>
    <Route path='/treat' element={<Payment/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Route>
    </Routes>

    <Footer/>
    </div>
    
    
  )
}

export default App