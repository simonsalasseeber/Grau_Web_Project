import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './views/Home/Home'
import Admin from './views/Admin/Admin'
import About from './views/About/About'
import { Routes, Route } from 'react-router-dom';
import React from "react";


function App() {

  return (
    <>
    <React.Suspense fallback={<img src="./assets/LogoGrau_Vectorial_1.svg" alt="Logo" />}>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
    </React.Suspense>
      
    </>
  )
}

export default App
