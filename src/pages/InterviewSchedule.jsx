function InterviewSchedule() {
  const interviews = [
    {
      id: 1,
      company: 'Infosys',
      role: 'Data Analyst',
      date: '15 October 2026',
      time: '10:00 AM',
    },
    {
      id: 2,
      company: 'TCS',
      role: 'Software Developer',
      date: '20 October 2026',
      time: '2:00 PM',
    },
  ]

  return (
    <div>
      <h1>Interview Schedule</h1>

      {interviews.map((interview) => (
        <div key={interview.id}>
          <h3>{interview.company}</h3>
          <p>Role: {interview.role}</p>
          <p>Date: {interview.date}</p>
          <p>Time: {interview.time}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default InterviewSchedule