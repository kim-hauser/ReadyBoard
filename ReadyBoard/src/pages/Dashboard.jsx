import { useState } from 'react'
import { Link } from 'react-router-dom'
import mockChanges from '../data/mockChanges'
import ChangeCard from '../components/ChangeCard'

const columns = [
  { key: 'ready', title: 'Ready' },
  { key: 'pending', title: 'Pending' },
  { key: 'open', title: 'Open' },
]

/* 1. Sort changes into (open, pending, ready) groups.
   2. Render the columns to place changes.
   3. Place sorted changes (now using a ChangeCard component!)
      into columns.
*/

function Dashboard() {
  const [viewMode, setViewMode] = useState('status')

  const groupedChanges = mockChanges.reduce((acc, change) => {
    const key = change.status.toLowerCase()
    acc[key] = acc[key] || []
    acc[key].push(change)
    return acc
  }, {})

  const groupedByAssignment = mockChanges.reduce((acc, change) => {
    const key = change.assignmentGroup || 'Unassigned'
    acc[key] = acc[key] || []
    acc[key].push(change)
    return acc
  }, {})

  const sortedAssignmentGroups = Object.entries(groupedByAssignment).sort(
    ([a], [b]) => a.localeCompare(b)
  )

  return (
    <div className="page">
      <div className="view-toggle">
        <button
          type="button"
          onClick={() => setViewMode('status')}
          className={viewMode === 'status' ? 'active-toggle' : ''}
        >
          Status View
        </button>

        <button
          type="button"
          onClick={() => setViewMode('assignment')}
          className={viewMode === 'assignment' ? 'active-toggle' : ''}
        >
          Assignment Group View
        </button>
      </div>

      {viewMode === 'status' ? (
        <div className="columns">
          {columns.map((col) => (
            <div key={col.key} className="status-column">
              <h2>{col.title}</h2>

              {groupedChanges[col.key]?.map((change) => (
                <ChangeCard key={change.id} change={change} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="assignment-buckets">
          {sortedAssignmentGroups.map(([groupName, changes]) => {
            const readyCount = changes.filter(
              (change) => change.status === 'Ready'
            ).length

            const pendingCount = changes.filter(
              (change) => change.status === 'Pending'
            ).length

            const openCount = changes.filter(
              (change) => change.status === 'Open'
            ).length

    /* queue-style Assignment Group View */

            return (
              <section key={groupName} className="queue-bucket">
                <div className="queue-bucket-header">
                  <div>
                    <h2>{groupName}</h2>
                    <p className="queue-bucket-meta">
                      {changes.length} total · Ready: {readyCount} · Pending: {pendingCount} · Open: {openCount}
                    </p>
                  </div>
                </div>

                <div className="queue-list">
                  {changes.map((change) => (
                    <Link
                      key={change.id}
                      to={`/change/${change.id}`}
                      className="queue-row"
                    >
                      <div className="queue-row-main">
                        <span className="queue-change-id">{change.id}</span>
                        <span className="queue-change-title">{change.title}</span>
                      </div>

                      <div className="queue-row-side">
                        <span className="queue-change-owner">{change.owner}</span>
                        <span
                          className={`queue-status-pill ${change.status.toLowerCase()}`}
                        >
                          {change.status}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Dashboard