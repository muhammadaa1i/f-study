import React from 'react'
import Layout from './pages/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Programs from './pages/Programs/Programs'
import Universities from './pages/Universities/Universities'
import Turkey from './pages/Turkey/Turkey'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Kent from './pages/Universities/Kent'
import Beykent from './pages/Universities/Beykent'
import Uskudar from './pages/Universities/Uskudar'
import Medipol from './pages/Universities/Medipol'
import Kultur from './pages/Universities/Kultur'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programs" element={<Programs />} />
          <Route path="universities" element={<Universities />} />
          <Route path="services" element={<Services />} />
          <Route path="turkey" element={<Turkey />} />
          <Route path="kent" element={<Kent />} />
          <Route path='beykent' element={<Beykent />} />
          <Route path='uskudar' element={<Uskudar />} />
          <Route path='medipol' element={<Medipol />} />
          <Route path='kultur' element={<Kultur />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App