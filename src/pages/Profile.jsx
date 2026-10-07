import { usePlacement } from '../context/PlacementContext'

function Profile() {
  const { applications } = usePlacement()

  const selectedCount = applications.filter(
    (application) => application.status === 'Selected'
  ).length

  return (
    <div className="profile-page">

      {/* Profile Header */}
      <div className="profile-header-card">

        <div className="profile-main-info">

          <div className="profile-avatar">
            R
          </div>

          <div>
            <p className="section-label">
              STUDENT PROFILE
            </p>

            <h1>Rahul</h1>

            <p>
              B.Tech • Artificial Intelligence & Data Science
            </p>
          </div>

        </div>

        <span className="profile-status">
          ● Active Student
        </span>

      </div>

      {/* Personal and Academic Details */}
      <div className="profile-content-grid">

        {/* Personal Details */}
        <div className="profile-card">

          <div className="profile-card-heading">

            <div>
              <p className="section-label">
                PERSONAL DETAILS
              </p>

              <h2>Personal Information</h2>
            </div>

          </div>

          <div className="profile-details">

            <div className="profile-detail-item">
              <span>FULL NAME</span>
              <strong>Rahul</strong>
            </div>

            <div className="profile-detail-item">
              <span>EMAIL ADDRESS</span>
              <strong>rahul@gmail.com</strong>
            </div>

            <div className="profile-detail-item">
              <span>ROLL NUMBER</span>
              <strong>101</strong>
            </div>

          </div>

        </div>

        {/* Academic Details */}
        <div className="profile-card">

          <div className="profile-card-heading">

            <div>
              <p className="section-label">
                ACADEMIC DETAILS
              </p>

              <h2>Academic Information</h2>
            </div>

          </div>

          <div className="profile-details">

            <div className="profile-detail-item">
              <span>COURSE</span>
              <strong>B.Tech AI & DS</strong>
            </div>

            <div className="profile-detail-item">
              <span>COLLEGE</span>
              <strong>ABC Engineering College</strong>
            </div>

            <div className="profile-detail-item">
              <span>DEPARTMENT</span>
              <strong>
                Artificial Intelligence & Data Science
              </strong>
            </div>

          </div>

        </div>

      </div>

      {/* Placement Information */}
      <div className="profile-card placement-profile-card">

        <div className="profile-card-heading">

          <div>
            <p className="section-label">
              PLACEMENT INFORMATION
            </p>

            <h2>Placement Profile</h2>

            <p>
              Information used for placement opportunities.
            </p>
          </div>

        </div>

        <div className="placement-info-grid">

          {/* Eligibility */}
          <div className="placement-info-item">

            <div className="placement-icon blue">
              🎓
            </div>

            <div>
              <span>ELIGIBILITY</span>
              <strong>Eligible</strong>
            </div>

          </div>

          {/* Profile Status */}
          <div className="placement-info-item">

            <div className="placement-icon green">
              ✓
            </div>

            <div>
              <span>PROFILE STATUS</span>
              <strong>Verified</strong>
            </div>

          </div>

          {/* Applications */}
          <div className="placement-info-item">

            <div className="placement-icon purple">
              💼
            </div>

            <div>
              <span>APPLICATIONS</span>
              <strong>
                {applications.length} Submitted
              </strong>
            </div>

          </div>

          {/* Selected */}
          <div className="placement-info-item">

            <div className="placement-icon orange">
              🎯
            </div>

            <div>
              <span>SELECTED</span>
              <strong>
                {selectedCount} Selected
              </strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Profile