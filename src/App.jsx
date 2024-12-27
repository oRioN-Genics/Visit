import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero_ from './components/Hero_.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero_ />
    </>
  )
}

export default App
