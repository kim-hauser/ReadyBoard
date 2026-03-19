import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">ReadyBoard</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/changes">Changes</Link>
      </div>
    </nav>
  )
}

export default NavBar