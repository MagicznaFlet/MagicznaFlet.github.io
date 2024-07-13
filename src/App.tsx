import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import About from './routes/About'
import Projects from './routes/Projects'
import Skills from './routes/Skills'
import ErrorComponent404 from './components/partials/NotFound'
import Contact from './routes/Contact'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <About />
//   }
// ])

function App() {

  return (
    <>
      <div className='h-[100vh]'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<About />} />
              <Route path='about' element={<About />} />
              <Route path='projects' element={<Projects />} />
              <Route path='skills' element={<Skills />} />
              <Route path='contact' element={<Contact />} />
              <Route path='*' element={<ErrorComponent404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
