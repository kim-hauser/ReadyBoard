import { useState } from 'react'
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
       into columns. */

function Dashboard() {
  const [viewMode, setViewMode] = useState('status')
  const groupedChanges = mockChanges.reduce((acc, change) => {
    const key = change.status.toLowerCase()
    acc[key] = acc[key] || []
    acc[key].push(change)
    return acc
  }, {})

  /* Grouped by assignment group toggle */

  const groupedByAssignment = mockChanges.reduce((acc, change) => {
  const key = change.assignmentGroup || 'Unassigned'
    acc[key] = acc[key] || []
    acc[key].push(change)
    return acc
  }, {})
  
  /* Sorts assignment groups */

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
      <div className="assignment-group-view">
          {sortedAssignmentGroups.map(([groupName, changes]) => (
            <div key={groupName} className="assignment-group-section">
              <h2>{groupName}</h2>

              <div className="grouped-cards">
                {changes.map((change) => (
                  <ChangeCard key={change.id} change={change} />
                ))}
            </div>
          </div>
          ))}
        </div>
      )}
   </div>
  )
}

export default Dashboard