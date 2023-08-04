import { useState } from 'react'
import Navrabr from './components/Navrabr'
import Hero from './components/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navrabr/>
     <Hero/>
    </>
  )
}

export default App
