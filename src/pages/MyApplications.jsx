function MyApplications() {
  const applications = [
    {
      id: 1,
      company: 'TCS',
      role: 'Software Developer',
      status: 'Under Review',
    },
    {
      id: 2,
      company: 'Infosys',
      role: 'Data Analyst',
      status: 'Interview Scheduled',
    },
    {
      id: 3,
      company: 'Wipro',
      role: 'React Developer',
      status: 'Selected',
    },
  ]

  return (
    <div>
      <h1>My Applications</h1>

      {applications.map((application) => (
        <div key={application.id}>
          <h3>{application.company}</h3>
          <p>Role: {application.role}</p>
          <p>Status: {application.status}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default MyApplications