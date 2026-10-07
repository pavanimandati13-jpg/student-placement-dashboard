import { createContext, useContext, useEffect, useState } from 'react'

const PlacementContext = createContext()

function getSavedApplications() {
  const savedApplications = localStorage.getItem('placementApplications')

  if (savedApplications) {
    return JSON.parse(savedApplications)
  }

  return [
    {
      id: 1,
      company: 'TCS',
      role: 'Software Developer',
      date: '05 Oct 2026',
      status: 'Under Review',
    },
  ]
}

export function PlacementProvider({ children }) {
  const [applications, setApplications] = useState(
    getSavedApplications
  )

  useEffect(() => {
    localStorage.setItem(
      'placementApplications',
      JSON.stringify(applications)
    )
  }, [applications])

  // Apply for a new job
  const applyForJob = (job) => {
    const alreadyApplied = applications.some(
      (application) => application.company === job.company
    )

    if (alreadyApplied) {
      alert(`You have already applied to ${job.company}`)
      return
    }

    const newApplication = {
      id: Date.now(),
      company: job.company,
      role: job.role,
      date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      status: 'Under Review',
    }

    setApplications((currentApplications) => [
      ...currentApplications,
      newApplication,
    ])

    alert(
      `Application submitted for ${job.role} at ${job.company}`
    )
  }

  // Update application status
  const updateApplicationStatus = (id, newStatus) => {
    setApplications((currentApplications) =>
      currentApplications.map((application) =>
        application.id === id
          ? {
              ...application,
              status: newStatus,
            }
          : application
      )
    )
  }

  return (
    <PlacementContext.Provider
      value={{
        applications,
        applyForJob,
        updateApplicationStatus,
      }}
    >
      {children}
    </PlacementContext.Provider>
  )
}

export function usePlacement() {
  return useContext(PlacementContext)
}