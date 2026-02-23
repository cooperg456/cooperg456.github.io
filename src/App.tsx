import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import './App.css'

import Projects from './Projects'
import About from './About'



function App() {

  return (
    <BrowserRouter>

      <header>
        <h2>
          <Link to="/">Cooper Gray</Link>
        </h2>
        <nav>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

			<div>
        <Routes>
          <Route index element={<div />}></Route>

          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>

		</BrowserRouter>
  )
}

export default App
