import mockChanges from '../data/MockChanges'
import { Link } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'

const columns = [
  { key: 'ready', title: 'Ready' },
  { key: 'pending', title: 'Pending' },
  { key: 'open', title: 'Open' },
]

/* 1. Sort changes into (open, pending, ready) groups. 
    2. Render the columns to place changes.
    3. Place sorted changes into columns. */

function Dashboard() {
  const groupedChanges = mockChanges.reduce((acc, change) => {
    const key = change.status.toLowerCase()
    acc[key] = acc[key] || []
    acc[key].push(change)
    return acc
  }, {})

  return (
    <div className="page">
      <div className="columns">
        {columns.map((col) => (
          <div key={col.key} className="status-column">
            <h2>{col.title}</h2>

            {groupedChanges[col.key]?.map((change) => (
              <div key={change.id} className="card">
                <h3>
                <Link to={`/change/${change.id}`}>
                    {change.title}
                </Link>
                </h3>
                <p>{change.owner}</p>
            </div>
            ))}
          </div>
          ))}
      </div>
    </div>
  )
}

export default Dashboard