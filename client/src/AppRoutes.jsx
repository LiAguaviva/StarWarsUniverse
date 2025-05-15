import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Dashboard/Home/Home'

export const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
            <div className='galaxy'/>
        <header>
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
