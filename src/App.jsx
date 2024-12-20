import { useState } from 'react'

import './App.css'
import Path from './routes/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Path/>
    </>
  )
}

export default App
