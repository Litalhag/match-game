import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Game from './pages/Game'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </Router>
  )
}

export default App
