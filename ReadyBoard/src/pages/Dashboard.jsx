import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import mockChanges from '../data/mockChanges'
import ChangeCard from '../components/ChangeCard'
import FilterSelect from '../components/FilterSelect'

const columns = [
  { key: 'ready', title: 'Ready' },
  { key: 'pending', title: 'Pending' },
  { key: 'open', title: 'Open' },
]

/* 1. Sort changes into (open, pending, ready) groups.
   2. Render the columns to place changes.
   3. Place sorted changes (now using a ChangeCard component!)
      into columns (Status View only)
*/

function Dashboard() {
  const location = useLocation()
  const [viewMode, setViewMode] = useState(
    location.state?.restoreView || 'status'
  )

  /* Owner filter bar in Status View */

  const [selectedOwner, setSelectedOwner] = useState('All Owners')

  /* Setup for Assignment Group filtering */

  const [selectedGroup, setSelectedGroup] = useState('All Groups')
  const assignmentGroups = [
    'All Groups',
    ...[...new Set(mockChanges.map(change => change.assignmentGroup || 'Unassigned'))].sort()
  ]

  /* Creates new owner set from mockChanges.js. Also gets last name to sort.*/
  
  const getLastName = (fullName) => {
  const nameParts = fullName.trim().split(' ')
  return nameParts[nameParts.length - 1]
  }

  const owners = [
    'All Owners',
    ...[...new Set(mockChanges.map(change => change.owner))].sort((a, b) =>
      getLastName(a).localeCompare(getLastName(b), undefined, { sensitivity: 'base' }) // Case-insensitive
    ),
  ]

  const filteredStatusChanges =
    selectedOwner === 'All Owners'
      ? mockChanges
      : mockChanges.filter(change => change.owner === selectedOwner)

  const groupedChanges = filteredStatusChanges.reduce((acc, change) => {
    const key = change.status.toLowerCase()
    acc[key] = acc[key] || []
    acc[key].push(change)
    return acc
  }, {})

 const filteredAssignmentChanges =
    selectedGroup === 'All Groups'
      ? mockChanges
      : mockChanges.filter(
        change => (change.assignmentGroup || 'Unassigned') === selectedGroup
      )
    
  const groupedByAssignment = filteredAssignmentChanges.reduce((acc, change) => {
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
  <div className="dashboard-controls">
  <div className="view-toggle">

    {/* Toggle to switch between Status and Assignment Group Views */}

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
  
  <div className="filter-bar">
    {viewMode === 'assignment' && (
      <FilterSelect
        label="Assignment Group"
        id="groupFilter"
        value={selectedGroup}
        onChange={(e) => setSelectedGroup(e.target.value)}
        options={assignmentGroups}
      />
    )}

    {viewMode === 'status' && (
      <FilterSelect
        label="Owner"
        id="ownerFilter"
        value={selectedOwner}
        onChange={(e) => setSelectedOwner(e.target.value)}
        options={owners}
      />
    )}
  </div>
</div>
    
    {/* Mapped columns in status view */}

    {viewMode === 'status' ? (
      <div className="columns">
        {columns.map((col) => (
          <div key={col.key} className="status-column">
            <h2>{col.title}</h2>
            {/* Pass viewMode into ChangeCard so the detail page knows which dashboard view we came from */}
            {groupedChanges[col.key]?.map((change) => (
              <ChangeCard key={change.id} change={change} viewMode={viewMode} />
            ))}
          </div>
        ))}
      </div>
    ) : (
      <div className="assignment-buckets"> {/* Assignment Group buckets */}
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

              {/* "Queue-list" = The item view for Assignment Group View to differentiate it 
              from the Change Cards used in Status View */ }
              {/* Pass view from Dashboard to ChangeDetail */}
              <div className="queue-list">
                {changes.map((change) => (
                  <Link
                    key={change.id}
                    to={`/change/${change.id}`}
                    state={{ fromView: viewMode }}
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