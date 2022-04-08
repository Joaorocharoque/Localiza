import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/index'
import Navbar from './components/Navbar/index'; 
import './App.css'
import Footer from './footer/index'

function App(){
  
    return (
      <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />     
      </Routes>
      <Footer/>
  </Router>
    )
  }
  export default App;