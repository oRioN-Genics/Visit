import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import GenerateTrip from './generate_trip/index.jsx'
import Head from './components/Head.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/generate_trip',
    element: <GenerateTrip />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head />
    <RouterProvider router={router} />
  </StrictMode>,
)
