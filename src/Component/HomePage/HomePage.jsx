import React from 'react'
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Form from '../Form/Form';
import { Router, Routes } from 'react-router-dom';
function HomePage() {
  return (
    <div>
        <Header/>
        <Routes>
            <Router path='/' element={<HomePage/>}/>
            <Router path='Gioithieu' element={<AboutUs/>}/>
            <Router path='Post' element={<Form/>}/>
        </Routes>
    </div>
  )
}

export default HomePage
