import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HeadProvider } from 'react-head'

import './index.css'
import About from './routes/About.tsx'
import Layout from './components/Layout.tsx'
import NotFound from './components/NotFound.tsx'
import Projects from './routes/Projects.tsx'
import Skills from './routes/Skills.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },

      {
        path: '*',
        element: <NotFound />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeadProvider>
      <RouterProvider router={router} />
    </HeadProvider>
  </React.StrictMode>,
)
