import { useState} from 'react'

import './App.css'
import Layout from './components/Layout'
import Background from './components/Background'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <div>
        <Layout>
        <Background/>
        </Layout>
      </div>
    </>
  )
}

export default App
