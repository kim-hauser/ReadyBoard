import { Link } from 'react-router-dom'

function ButtonLink({ to, children, variant = 'primary' }) {
  return (
    <Link to={to} className={`button-link ${variant}`}>
      {children}
    </Link>
  )
}

export default ButtonLink