import { Link } from 'react-router-dom'
import usePlacementData from '../hooks/usePlacementData'

function Dashboard() {
  const {
    applications,
    totalApplications,
    underReviewCount,
    interviewCount,
    selectedCount,
  } = usePlacementData()

  return (
    <div className="dashboard-page">

      {/* Welcome Banner */}
      <section className="welcome-banner">
        <div className="welcome-content">
          <p className="section-label">STUDENT PLACEMENT PORTAL</p>

          <h1>Welcome back, Rahul 👋</h1>

          <p>
            Track your placement journey, applications, interviews,
            and career opportunities from one place.
          </p>

          <div className="welcome-actions">
            <Link to="/jobs" className="primary-action">
              Explore Jobs
            </Link>

            <Link to="/applications" className="secondary-action">
              My Applications
            </Link>
          </div>
        </div>

        <div className="welcome-profile">
          <div className="profile-circle-large">R</div>
          <strong>Rahul</strong>
          <span>B.Tech • AI & DS</span>
        </div>
      </section>


      {/* Dashboard Statistics */}
      <section className="dashboard-statistics">

        <div className="dashboard-stat-card">
          <div className="dashboard-stat-top">
            <div className="dashboard-stat-icon blue">💼</div>
            <span className="stat-change positive">Active</span>
          </div>

          <p>Total Jobs Applied</p>
          <h2>{totalApplications}</h2>

          <span className="stat-description">
            Applications submitted
          </span>
        </div>


        <div className="dashboard-stat-card">
          <div className="dashboard-stat-top">
            <div className="dashboard-stat-icon orange">⏳</div>
            <span className="stat-change">Active</span>
          </div>

          <p>Applications Under Review</p>
          <h2>{underReviewCount}</h2>

          <span className="stat-description">
            Awaiting company response
          </span>
        </div>


        <div className="dashboard-stat-card">
          <div className="dashboard-stat-top">
            <div className="dashboard-stat-icon purple">📅</div>
            <span className="stat-change positive">Upcoming</span>
          </div>

          <p>Interviews Scheduled</p>
          <h2>{interviewCount}</h2>

          <span className="stat-description">
            Interviews scheduled
          </span>
        </div>


        <div className="dashboard-stat-card">
          <div className="dashboard-stat-top">
            <div className="dashboard-stat-icon green">🎯</div>
            <span className="stat-change positive">Selected</span>
          </div>

          <p>Applications Selected</p>
          <h2>{selectedCount}</h2>

          <span className="stat-description">
            Successful placement
          </span>
        </div>

      </section>


      {/* Main Dashboard Grid */}
      <section className="dashboard-main-grid">

        {/* Recent Applications */}
        <div className="dashboard-panel">

          <div className="dashboard-panel-header">
            <div>
              <p className="panel-label">APPLICATION TRACKER</p>

              <h2>Recent Applications</h2>

              <p>
                Monitor your latest job applications.
              </p>
            </div>

            <Link to="/applications" className="panel-link">
              View All →
            </Link>
          </div>


          <div className="application-list">

            {applications.slice(0, 3).map((application) => (

              <div
                className="dashboard-application"
                key={application.id}
              >

                <div className="company-logo blue-logo">
                  {application.company.charAt(0)}
                </div>

                <div className="application-details">
                  <strong>{application.company}</strong>

                  <span>{application.role}</span>

                  <small>
                    Applied {application.date}
                  </small>
                </div>

                <span
                  className={`dashboard-status ${
                    application.status === 'Selected'
                      ? 'selected'
                      : application.status === 'Interview Scheduled'
                      ? 'interview'
                      : application.status === 'Rejected'
                      ? 'rejected'
                      : 'review'
                  }`}
                >
                  {application.status}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* Upcoming Interviews */}
        <div className="dashboard-panel">

          <div className="dashboard-panel-header">

            <div>
              <p className="panel-label">
                INTERVIEW TRACKER
              </p>

              <h2>Upcoming Interviews</h2>

              <p>
                Your next scheduled interviews.
              </p>
            </div>

            <Link to="/interviews" className="panel-link">
              View All →
            </Link>

          </div>


          <div className="interview-list">

            <div className="dashboard-interview">

              <div className="interview-date-box">
                <strong>15</strong>
                <span>OCT</span>
              </div>

              <div className="interview-details">
                <strong>Infosys</strong>
                <span>Data Analyst</span>
                <small>10:00 AM • Online</small>
              </div>

              <span className="upcoming-badge">
                Upcoming
              </span>

            </div>


            <div className="dashboard-interview">

              <div className="interview-date-box">
                <strong>20</strong>
                <span>OCT</span>
              </div>

              <div className="interview-details">
                <strong>TCS</strong>
                <span>Software Developer</span>
                <small>2:00 PM • Online</small>
              </div>

              <span className="upcoming-badge">
                Upcoming
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* Placement Progress */}
      <section className="placement-progress-section">

        <div className="quick-actions-heading">

          <div>
            <p className="section-label">
              PLACEMENT JOURNEY
            </p>

            <h2>Application Progress</h2>

            <p>
              Track your overall placement progress.
            </p>
          </div>

        </div>


        <div className="placement-progress-card">

          {/* Applied */}
          <div className="progress-step completed">

            <div className="progress-circle">
              ✓
            </div>

            <strong>Applied</strong>

            <span>
              {totalApplications} Applications
            </span>

          </div>


          <div className="progress-line"></div>


          {/* Under Review */}
          <div
            className={`progress-step ${
              underReviewCount > 0 ||
              interviewCount > 0 ||
              selectedCount > 0
                ? 'completed'
                : ''
            }`}
          >

            <div className="progress-circle">

              {underReviewCount > 0 ||
              interviewCount > 0 ||
              selectedCount > 0
                ? '✓'
                : '2'}

            </div>

            <strong>Under Review</strong>

            <span>
              {underReviewCount} Applications
            </span>

          </div>


          <div className="progress-line"></div>


          {/* Interview */}
          <div
            className={`progress-step ${
              interviewCount > 0 || selectedCount > 0
                ? 'completed'
                : ''
            }`}
          >

            <div className="progress-circle">

              {interviewCount > 0 || selectedCount > 0
                ? '✓'
                : '3'}

            </div>

            <strong>Interview</strong>

            <span>
              {interviewCount} Scheduled
            </span>

          </div>


          <div className="progress-line"></div>


          {/* Selected */}
          <div
            className={`progress-step ${
              selectedCount > 0
                ? 'completed'
                : ''
            }`}
          >

            <div className="progress-circle">

              {selectedCount > 0
                ? '✓'
                : '4'}

            </div>

            <strong>Selected</strong>

            <span>
              {selectedCount} Selected
            </span>

          </div>

        </div>

      </section>


      {/* Quick Actions */}
      <section className="quick-actions-section">

        <div className="quick-actions-heading">

          <div>
            <p className="section-label">
              QUICK ACCESS
            </p>

            <h2>Quick Actions</h2>

            <p>
              Access important placement activities quickly.
            </p>
          </div>

        </div>


        <div className="professional-action-grid">

          <Link
            to="/jobs"
            className="professional-action-card"
          >
            <div className="action-icon blue-action">
              🔎
            </div>

            <div>
              <h3>Explore Jobs</h3>
              <p>Find new placement opportunities.</p>
            </div>

            <span>→</span>
          </Link>


          <Link
            to="/applications"
            className="professional-action-card"
          >
            <div className="action-icon purple-action">
              📋
            </div>

            <div>
              <h3>Track Applications</h3>
              <p>Check your application status.</p>
            </div>

            <span>→</span>
          </Link>


          <Link
            to="/interviews"
            className="professional-action-card"
          >
            <div className="action-icon green-action">
              📅
            </div>

            <div>
              <h3>View Interviews</h3>
              <p>Check your upcoming interviews.</p>
            </div>

            <span>→</span>
          </Link>


          <Link
            to="/notifications"
            className="professional-action-card"
          >
            <div className="action-icon orange-action">
              🔔
            </div>

            <div>
              <h3>Notifications</h3>
              <p>View your latest placement updates.</p>
            </div>

            <span>→</span>
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Dashboard