import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import ChangeList from './pages/ChangeList'
import ChangeDetail from './pages/ChangeDetail'


function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/changes" element={<ChangeList />} />
        <Route path="/change/:id" element={<ChangeDetail />} />
      </Routes>
    </div>
  )
}

export default App