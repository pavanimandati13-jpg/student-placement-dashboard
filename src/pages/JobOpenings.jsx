import { useState } from 'react'
import { usePlacement } from '../context/PlacementContext'

function JobOpenings() {
  const { applyForJob } = usePlacement()

  const [search, setSearch] = useState('')

  const jobs = [
    {
      id: 1,
      company: 'TCS',
      role: 'Software Developer',
      location: 'Hyderabad',
      type: 'Full Time',
      salary: '₹6 - 8 LPA',
      skills: 'Java • React • SQL',
    },
    {
      id: 2,
      company: 'Infosys',
      role: 'Data Analyst',
      location: 'Bangalore',
      type: 'Full Time',
      salary: '₹5 - 7 LPA',
      skills: 'Python • SQL • Power BI',
    },
    {
      id: 3,
      company: 'Wipro',
      role: 'React Developer',
      location: 'Chennai',
      type: 'Full Time',
      salary: '₹5 - 8 LPA',
      skills: 'React • JavaScript • CSS',
    },
    {
      id: 4,
      company: 'Accenture',
      role: 'AI Engineer',
      location: 'Pune',
      type: 'Full Time',
      salary: '₹7 - 10 LPA',
      skills: 'Python • AI • Machine Learning',
    },
  ]

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  )

  const handleApply = (job) => {
    applyForJob(job)
  }

  return (
    <div className="jobs-page">

      {/* Page Header */}
      <div className="page-heading">
        <div>
          <p className="section-label">CAREER OPPORTUNITIES</p>

          <h1>Job Openings</h1>

          <p>
            Discover placement opportunities from leading companies.
          </p>
        </div>

        <div className="job-count">
          <strong>{filteredJobs.length}</strong>
          <span>Open Positions</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="professional-job-search">

        <div className="search-icon">
          🔎
        </div>

        <div className="search-content">
          <label>SEARCH JOBS</label>

          <input
            type="text"
            placeholder="Search by company, role or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {search && (
          <button
            className="clear-search"
            onClick={() => setSearch('')}
          >
            Clear
          </button>
        )}

      </div>

      {/* Result Information */}
      <div className="jobs-result-bar">

        <div>
          <strong>{filteredJobs.length}</strong>
          <span> opportunities available</span>
        </div>

        <span className="jobs-sort-label">
          Latest Opportunities
        </span>

      </div>

      {/* Job Cards */}
      <div className="professional-jobs-grid">

        {filteredJobs.length > 0 ? (

          filteredJobs.map((job) => (

            <div
              className="professional-job-card"
              key={job.id}
            >

              {/* Card Top */}
              <div className="professional-job-top">

                <div className="professional-company-logo">
                  {job.company.charAt(0)}
                </div>

                <span className="professional-job-type">
                  {job.type}
                </span>

              </div>

              {/* Job Information */}
              <div className="professional-job-info">

                <h2>{job.role}</h2>

                <h3>{job.company}</h3>

                <div className="job-location">
                  <span>📍</span>
                  {job.location}
                </div>

              </div>

              {/* Salary */}
              <div className="job-salary-box">

                <span>EXPECTED PACKAGE</span>

                <strong>{job.salary}</strong>

              </div>

              {/* Skills */}
              <div className="job-skills">

                <span>Required Skills</span>

                <p>{job.skills}</p>

              </div>

              {/* Footer */}
              <div className="professional-job-footer">

                <span className="campus-badge">
                  🎓 Campus Placement
                </span>

                <button
                  className="professional-apply-btn"
                  onClick={() => handleApply(job)}
                >
                  Apply Now →
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="professional-no-jobs">

            <div className="no-jobs-icon">
              🔍
            </div>

            <h2>No jobs found</h2>

            <p>
              Try searching for another company, role or location.
            </p>

            <button
              onClick={() => setSearch('')}
              className="reset-search-btn"
            >
              View All Jobs
            </button>

          </div>

        )}

      </div>

    </div>
  )
}

export default JobOpenings