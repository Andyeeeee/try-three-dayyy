import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import { useState } from 'react'


import './App.css'

//page
import Home from './pages/Home'
import About from './pages/Abouts'

function App() {

  return (

    <BrowserRouter>
      <header>
        <nav>
          <h1>three-day-touch</h1>
          <NavLink to="./">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>


  )
}

export default App
