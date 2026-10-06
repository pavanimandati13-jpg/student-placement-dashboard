import { useState } from 'react'

function JobOpenings() {
  const [search, setSearch] = useState('')

  const jobs = [
    {
      id: 1,
      company: 'TCS',
      role: 'Software Developer',
      location: 'Hyderabad',
    },
    {
      id: 2,
      company: 'Infosys',
      role: 'Data Analyst',
      location: 'Bangalore',
    },
    {
      id: 3,
      company: 'Wipro',
      role: 'React Developer',
      location: 'Chennai',
    },
    {
      id: 4,
      company: 'Accenture',
      role: 'AI Engineer',
      location: 'Pune',
    },
  ]

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase())
  )

  const handleApply = (job) => {
    alert(`Applied for ${job.role} at ${job.company}`)
  }

  return (
    <div>
      <h1>Job Openings</h1>

      <input
        type="text"
        placeholder="Search company or job role"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      {filteredJobs.map((job) => (
        <div key={job.id}>
          <h3>{job.company}</h3>

          <p>Role: {job.role}</p>

          <p>Location: {job.location}</p>

          <button onClick={() => handleApply(job)}>
            Apply
          </button>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default JobOpenings