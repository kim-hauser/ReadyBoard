import { Link } from 'react-router-dom'

function ChangeCard({ change }) {
  const { id, title, owner } = change

  return (
    <div className="card">
      <h3>
        <Link to={`/change/${id}`}>
          {title}
        </Link>
      </h3>
      <p>{owner}</p>
    </div>
  )
}

export default ChangeCard