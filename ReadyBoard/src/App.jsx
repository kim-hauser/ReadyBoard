import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<h1>Hello, LaunchCode!</h1>} />
        <Route path="/change/:id" element={<h1>Change Detail</h1>} />
      </Routes>
    </div>
  )
}

export default App