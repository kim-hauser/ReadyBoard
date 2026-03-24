import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/changes">Changes</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default NavBar