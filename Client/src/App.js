import React from 'react'
import Navbar from './component/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Contact from './component/Contact'
import Login from './component/Login'
import Registration from './component/Registration'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exect  path='/' element={<Home/>}/>
      <Route   path='/contact' element={<Contact/>}/>
      <Route   path='/login' element={<Login/>}/>
      <Route   path='/registration' element={<Registration/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App