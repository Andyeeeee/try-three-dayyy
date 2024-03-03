import { BrowserRouter, Routes, Route, Link, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'



import './App.css'

//page
import Home from './pages/Home'
import About from './pages/Abouts'
import RootLaout from './layouts/RootLaout'
import HelpLaour from './layouts/HelpLaour'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotfFound from './pages/NotfFound'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='./' element={<RootLaout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLaour />} >
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='*' element={<NotfFound />} />
    </Route >
  )
)

function App() {

  return (

    /* 
    <header>
            <nav>
              <h1>three-day-touch</h1>
              <NavLink to="./">Home</NavLink>
              <NavLink to="about">About</NavLink>
            </nav>
          </header>
           */

    <RouterProvider router={router} />




  )
}

export default App
