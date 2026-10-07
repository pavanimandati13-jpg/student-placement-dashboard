import { usePlacement } from '../context/PlacementContext'

function MyApplications() {
  const { applications, updateApplicationStatus } = usePlacement()

  const underReviewCount = applications.filter(
    (application) => application.status === 'Under Review'
  ).length

  const interviewCount = applications.filter(
    (application) => application.status === 'Interview Scheduled'
  ).length

  const selectedCount = applications.filter(
    (application) => application.status === 'Selected'
  ).length

  const getStatusClass = (status) => {
    if (status === 'Interview Scheduled') return 'interview'
    if (status === 'Selected') return 'selected'
    if (status === 'Rejected') return 'rejected'
    return 'review'
  }

  return (
    <div className="applications-page">
      <div className="page-heading">
        <div>
          <p className="section-label">PLACEMENT TRACKER</p>
          <h1>My Applications</h1>
          <p>Track the status of all your job applications.</p>
        </div>

        <div className="application-count">
          <strong>{applications.length}</strong>
          <span>Total Applications</span>
        </div>
      </div>

      <div className="application-summary">
        <div className="summary-card">
          <span>📋</span>
          <div>
            <p>Total Applied</p>
            <h2>{applications.length}</h2>
          </div>
        </div>

        <div className="summary-card">
          <span>⏳</span>
          <div>
            <p>Under Review</p>
            <h2>{underReviewCount}</h2>
          </div>
        </div>

        <div className="summary-card">
          <span>📅</span>
          <div>
            <p>Interviews</p>
            <h2>{interviewCount}</h2>
          </div>
        </div>

        <div className="summary-card">
          <span>🎯</span>
          <div>
            <p>Selected</p>
            <h2>{selectedCount}</h2>
          </div>
        </div>
      </div>

      <div className="applications-card">
        <div className="applications-card-header">
          <div>
            <h2>Application History</h2>
            <p>View and update your placement applications.</p>
          </div>
        </div>

        <div className="applications-table">

          <div className="table-row table-header">
            <span>Company</span>
            <span>Position</span>
            <span>Applied Date</span>
            <span>Status</span>
          </div>

          {applications.length > 0 ? (
            applications.map((application) => (
              <div className="table-row" key={application.id}>

                <div className="company-cell">
                  <div className="company-logo-large">
                    {application.company.charAt(0)}
                  </div>

                  <strong>{application.company}</strong>
                </div>

                <span>{application.role}</span>

                <span className="application-date">
                  {application.date}
                </span>

                <div className="application-status-area">

                  <span
                    className={`application-status ${getStatusClass(
                      application.status
                    )}`}
                  >
                    {application.status}
                  </span>

                  <select
                    value={application.status}
                    onChange={(e) =>
                      updateApplicationStatus(
                        application.id,
                        e.target.value
                      )
                    }
                    className="status-select"
                  >
                    <option value="Under Review">
                      Under Review
                    </option>

                    <option value="Interview Scheduled">
                      Interview Scheduled
                    </option>

                    <option value="Selected">
                      Selected
                    </option>

                    <option value="Rejected">
                      Rejected
                    </option>
                  </select>

                </div>

              </div>
            ))
          ) : (
            <div className="no-applications">
              <h3>No Applications Yet</h3>
              <p>Apply for a job to see your application here.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default MyApplications