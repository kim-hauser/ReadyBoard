import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ChangeList from './pages/ChangeList'
import ChangeDetail from './pages/ChangeDetail'


function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/changes" element={<ChangeList />} />
        <Route path="/change/:id" element={<ChangeDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App