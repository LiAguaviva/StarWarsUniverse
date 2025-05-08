import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavbarApp } from './components/Navigation/NavbarApp/NavbarApp'
import { Home } from './pages/Dashboard/Home/Home'

export const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
            <div className='galaxy'/>
        <header>
          {/* <NavbarApp /> */}
        </header>

        <main className='containerPpal'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
