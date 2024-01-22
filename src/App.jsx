import { useState } from 'react'
import './App.css'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Cv from './Skills'

function App() {
  const [selected, setSelected] = useState(0)

  return (
    <div className='relative'>
      <About section={1} selected={selected} setSelected={setSelected} />
      <Projects section={2} selected={selected} setSelected={setSelected} />
      <Cv section={3} selected={selected} setSelected={setSelected} />
      <Contact section={4} selected={selected} setSelected={setSelected} />
    </div>
  )
}

export default App
