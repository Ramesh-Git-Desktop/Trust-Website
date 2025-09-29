import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Header from './Components/Common/header'
import AboutUs from './Components/Pages/About-Us'
import Footer from './Components/Common/footer'

function App() {
  return (
    <>
     <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App