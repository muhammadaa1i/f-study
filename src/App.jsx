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
import Arel from './pages/Universities/Arel'
import { ToastContainer } from 'react-toastify'
import Topkapi from './pages/Universities/Topkapi'
import Halic from './pages/Universities/Halic'
import Biruni from './pages/Universities/Biruni'
import Nisantasi from './pages/Universities/Nisantasi'
import Istinye from './pages/Universities/Istinye'
import Ozyegin from './pages/Universities/Ozyegin'
import Fatih from './pages/Universities/Fatih'
import Questions from './pages/Questions/Questions'
import Partner from './pages/Partner/PArtner'

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programs" element={<Programs />} />
          <Route path="universities" element={<Universities />} />
          <Route path="services" element={<Services />} />
          <Route path="turkey" element={<Turkey />} />
          <Route path='questions' element={<Questions />} />
          <Route path='partner' element={<Partner />} />
          <Route path="kent" element={<Kent />} />
          <Route path='beykent' element={<Beykent />} />
          <Route path='uskudar' element={<Uskudar />} />
          <Route path='medipol' element={<Medipol />} />
          <Route path='kultur' element={<Kultur />} />
          <Route path='arel' element={<Arel />} />
          <Route path='topkapi' element={<Topkapi />} />
          <Route path='halic' element={<Halic />} />
          <Route path='biruni' element={<Biruni />} />
          <Route path='nisantasi' element={<Nisantasi />} />
          <Route path='istinye' element={<Istinye />} />
          <Route path='ozyegin' element={<Ozyegin />} />
          <Route path='fatih' element={<Fatih />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App