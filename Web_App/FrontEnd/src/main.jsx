import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import GenerateTrip from './generate_trip/index.jsx'
import Head from './components/Head.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import ViewTrip from './view_trip/[tripID]/index.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/generate_trip',
    element: <GenerateTrip />
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/view_trip/:tripID',
    element: <ViewTrip />,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Head />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
