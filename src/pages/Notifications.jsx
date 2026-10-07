import { useState } from 'react'

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'Interview Alert',
      title: 'Infosys Interview Scheduled',
      message:
        'Your Infosys interview is scheduled for 15 October 2026 at 10:00 AM.',
      time: 'Today',
      icon: '📅',
      status: 'Important',
      read: false,
    },
    {
      id: 2,
      type: 'Company Update',
      title: 'TCS Job Opening',
      message:
        'TCS has opened applications for the Software Developer position.',
      time: 'Yesterday',
      icon: '💼',
      status: 'New',
      read: false,
    },
    {
      id: 3,
      type: 'Placement Announcement',
      title: 'Wipro Placement Drive',
      message:
        'Wipro placement drive registration is now open for eligible students.',
      time: '2 days ago',
      icon: '🎓',
      status: 'New',
      read: false,
    },
    {
      id: 4,
      type: 'Application Update',
      title: 'Application Under Review',
      message:
        'Your application for the TCS Software Developer position is under review.',
      time: '3 days ago',
      icon: '⏳',
      status: 'Update',
      read: true,
    },
  ])

  const unreadNotifications = notifications.filter(
    (notification) => !notification.read
  )

  const importantNotifications = notifications.filter(
    (notification) => notification.status === 'Important'
  )

  const newNotifications = notifications.filter(
    (notification) => notification.status === 'New'
  )

  const markAllAsRead = () => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    )
  }

  return (
    <div className="notifications-page">

      {/* Page Header */}
      <div className="page-heading">

        <div>
          <p className="section-label">
            PLACEMENT UPDATES
          </p>

          <h1>Notifications</h1>

          <p>
            Stay updated with your latest placement activities and alerts.
          </p>
        </div>

        <div className="notification-count">
          <strong>{unreadNotifications.length}</strong>

          <span>Unread Updates</span>
        </div>

      </div>

      {/* Notification Summary */}
      <div className="notification-summary">

        <div className="notification-summary-card">

          <div className="notification-summary-icon blue">
            🔔
          </div>

          <div>
            <span>Total Notifications</span>
            <strong>{notifications.length}</strong>
          </div>

        </div>

        <div className="notification-summary-card">

          <div className="notification-summary-icon orange">
            ⚠️
          </div>

          <div>
            <span>Important Alerts</span>
            <strong>{importantNotifications.length}</strong>
          </div>

        </div>

        <div className="notification-summary-card">

          <div className="notification-summary-icon green">
            ✓
          </div>

          <div>
            <span>New Updates</span>
            <strong>{newNotifications.length}</strong>
          </div>

        </div>

      </div>

      {/* Notifications Card */}
      <div className="notifications-card">

        <div className="notifications-card-header">

          <div>
            <p className="section-label">
              LATEST ACTIVITY
            </p>

            <h2>Recent Notifications</h2>

            <p>
              Important updates related to your placement journey.
            </p>
          </div>

          <button
            className="mark-read-btn"
            onClick={markAllAsRead}
          >
            Mark All as Read
          </button>

        </div>

        {/* Notification List */}
        <div className="notifications-list">

          {notifications.map((notification) => (

            <div
              className="professional-notification"
              key={notification.id}
            >

              <div className="notification-icon">
                {notification.icon}
              </div>

              <div className="notification-content">

                <div className="notification-title-row">

                  <div>

                    <span className="notification-type">
                      {notification.type}
                    </span>

                    <h3>
                      {notification.title}
                    </h3>

                  </div>

                  <span className="notification-status">
                    {notification.read ? 'Read' : notification.status}
                  </span>

                </div>

                <p>
                  {notification.message}
                </p>

                <span className="notification-time">
                  🕒 {notification.time}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Notifications