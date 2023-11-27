import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Features from './pages/hyper/features'
import Layout from './components/ui/hyper/layout'
import Company from './pages/hyper/company'
import About from './pages/hyper/about'
import './App.css'
import Home from './pages/hyper/home'
import Careers from './pages/hyper/careers'


function App() {
  const [data, setData] = useState(false)

  console.log(data, setData, 'hahahaha')
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route index element={<Home />} />
          <Route path='features' element={<Features />} />
          <Route path='company' element={<Company />} />
          <Route path='careers' element={<Careers />} />
          <Route path='about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
