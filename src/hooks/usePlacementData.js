import { usePlacement } from '../context/PlacementContext'

function usePlacementData() {
  const { applications, applyForJob } = usePlacement()

  const totalApplications = applications.length

  const underReviewCount = applications.filter(
    (application) => application.status === 'Under Review'
  ).length

  const interviewCount = applications.filter(
    (application) => application.status === 'Interview Scheduled'
  ).length

  const selectedCount = applications.filter(
    (application) => application.status === 'Selected'
  ).length

  return {
    applications,
    applyForJob,
    totalApplications,
    underReviewCount,
    interviewCount,
    selectedCount,
  }
}

export default usePlacementData