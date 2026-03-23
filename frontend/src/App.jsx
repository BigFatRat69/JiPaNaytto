import HomePage from './components/homePage'
import Employees from './components/employees'
import Projects from './components/projects'
import Contact from './components/contact'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Etusivu</Link>
        <Link to="/employees">Henkilöt</Link>
        <Link to="/projects">Projektit</Link>
        <Link to="/contact">Yhteystiedot</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
