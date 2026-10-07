import { useState } from 'react'

function InterviewSchedule() {
  const [interviews] = useState([
    {
      id: 1,
      company: 'Infosys',
      role: 'Data Analyst',
      date: '15 October 2026',
      time: '10:00 AM',
      mode: 'Online',
      round: 'Technical Interview',
      status: 'Upcoming',
      logo: 'I',
    },
    {
      id: 2,
      company: 'TCS',
      role: 'Software Developer',
      date: '20 October 2026',
      time: '2:00 PM',
      mode: 'Online',
      round: 'Technical + HR',
      status: 'Upcoming',
      logo: 'T',
    },
    {
      id: 3,
      company: 'Wipro',
      role: 'React Developer',
      date: '25 September 2026',
      time: '11:30 AM',
      mode: 'Campus',
      round: 'HR Interview',
      status: 'Completed',
      logo: 'W',
    },
  ])

  const upcomingInterviews = interviews.filter(
    (interview) => interview.status === 'Upcoming'
  )

  const completedInterviews = interviews.filter(
    (interview) => interview.status === 'Completed'
  )

  const onlineInterviews = interviews.filter(
    (interview) => interview.mode === 'Online'
  )

  return (
    <div className="interviews-page">

      {/* Page Header */}
      <div className="page-heading">
        <div>
          <p className="section-label">PLACEMENT ACTIVITY</p>

          <h1>Interview Schedule</h1>

          <p>
            Manage your upcoming and completed placement interviews.
          </p>
        </div>

        <div className="interview-count">
          <strong>{upcomingInterviews.length}</strong>

          <span>Upcoming Interviews</span>
        </div>
      </div>

      {/* Interview Summary */}
      <div className="interview-summary">

        <div className="interview-summary-card">
          <div className="summary-icon">
            📅
          </div>

          <div>
            <span>Upcoming</span>
            <strong>{upcomingInterviews.length}</strong>
          </div>
        </div>

        <div className="interview-summary-card">
          <div className="summary-icon">
            ✓
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedInterviews.length}</strong>
          </div>
        </div>

        <div className="interview-summary-card">
          <div className="summary-icon">
            💻
          </div>

          <div>
            <span>Online Interviews</span>
            <strong>{onlineInterviews.length}</strong>
          </div>
        </div>

        <div className="interview-summary-card">
          <div className="summary-icon">
            🎯
          </div>

          <div>
            <span>Total Interviews</span>
            <strong>{interviews.length}</strong>
          </div>
        </div>

      </div>

      {/* Interview List */}
      <div className="interview-section">

        <div className="section-header">

          <h2>Scheduled Interviews</h2>

          <p>
            Keep track of your interview dates, rounds and meeting details.
          </p>

        </div>

        <div className="interview-list">

          {interviews.map((interview) => (

            <div
              className="professional-interview-card"
              key={interview.id}
            >

              {/* Company */}
              <div className="interview-company">

                <div className="interview-company-logo">
                  {interview.logo}
                </div>

                <div>
                  <h3>{interview.company}</h3>

                  <p>{interview.role}</p>
                </div>

              </div>

              {/* Date */}
              <div className="interview-detail">

                <span>DATE</span>

                <strong>{interview.date}</strong>

              </div>

              {/* Time */}
              <div className="interview-detail">

                <span>TIME</span>

                <strong>{interview.time}</strong>

              </div>

              {/* Round */}
              <div className="interview-detail">

                <span>INTERVIEW ROUND</span>

                <strong>{interview.round}</strong>

              </div>

              {/* Mode */}
              <div className="interview-detail">

                <span>MODE</span>

                <strong>{interview.mode}</strong>

              </div>

              {/* Status */}
              <div>

                <span
                  className={
                    interview.status === 'Upcoming'
                      ? 'interview-status upcoming'
                      : 'interview-status completed'
                  }
                >
                  {interview.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Preparation Section */}
      <div className="preparation-card">

        <div className="preparation-icon">
          ✓
        </div>

        <div className="preparation-content">

          <h2>Prepare for your interviews</h2>

          <p>
            Review company details, interview rounds and required
            skills before attending your interview.
          </p>

        </div>

        <button className="preparation-btn">
          View Preparation Tips
        </button>

      </div>

    </div>
  )
}

export default InterviewSchedule