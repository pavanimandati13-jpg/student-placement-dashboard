function Notifications() {
  const notifications = [
    {
      id: 1,
      title: 'Interview Alert',
      message: 'Your Infosys interview is scheduled for 15 October 2026.',
    },
    {
      id: 2,
      title: 'Company Update',
      message: 'TCS has opened applications for Software Developer.',
    },
    {
      id: 3,
      title: 'Placement Announcement',
      message: 'Wipro placement drive registration is now open.',
    },
  ]

  return (
    <div>
      <h1>Notifications</h1>

      {notifications.map((notification) => (
        <div key={notification.id}>
          <h3>{notification.title}</h3>
          <p>{notification.message}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Notifications