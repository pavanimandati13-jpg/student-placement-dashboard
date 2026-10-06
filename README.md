# Student Placement Dashboard

A React-based Student Placement Dashboard designed to help students manage placement activities such as job opportunities, applications, interviews, profiles, and notifications through a simple and user-friendly interface.

## Live Demo

https://pavanimandati13-jpg.github.io/student-placement-dashboard/

## GitHub Repository

https://github.com/pavanimandati13-jpg/student-placement-dashboard

---

## Project Overview

The Student Placement Dashboard is a web application developed using React.js to provide students with a centralized platform for managing their placement activities.

The application allows students to:

- Login and register
- View their placement dashboard
- Manage profile information
- Browse available job openings
- Search for companies and job roles
- Apply for job opportunities
- Track application status
- View scheduled interviews
- Receive placement notifications

The project demonstrates the use of React components, React Router, state management, event handling, and dynamic data rendering.

---

## Features

### 1. Student Login
Students can enter their email and password to access the placement portal.

### 2. Student Registration
New students can register by providing their name, email, and password.

### 3. Dashboard
The dashboard provides an overview of placement activities, including:

- Total Jobs Applied
- Applications Under Review
- Interviews Scheduled
- Students Selected

### 4. Student Profile
Students can view their basic profile information such as:

- Name
- Email
- Roll Number
- Course
- College

### 5. Job Openings
Students can view available job opportunities with details such as:

- Company
- Job Role
- Location

The search feature allows students to search for companies or job roles.

### 6. Job Application
Students can apply for available job opportunities using the Apply button.

### 7. Application Tracking
The My Applications page displays the current status of submitted applications.

Example statuses:

- Under Review
- Interview Scheduled
- Selected

### 8. Interview Schedule
Students can view upcoming interview details including:

- Company
- Job Role
- Interview Date
- Interview Time

### 9. Notifications
Students can view important placement-related notifications and announcements.

### 10. Responsive React Interface
The application is developed using React and organized into reusable pages and components.

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| React.js | Frontend development |
| Vite | Development and build tool |
| React Router | Page navigation |
| JavaScript | Application logic |
| HTML5 | Page structure |
| CSS3 | Styling |
| Git | Version control |
| GitHub | Source code repository |
| GitHub Pages | Deployment |

---

## React Concepts Used

This project demonstrates several important React concepts:

- Functional Components
- JSX
- `useState` Hook
- Event Handling
- Conditional Rendering
- Array Mapping
- React Router
- Form Handling
- Search and Filtering
- Dynamic Data Rendering

---

## Project Structure

```text
student-placement-dashboard/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── context/
│   │
│   ├── data/
│   │
│   ├── hooks/
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Registration.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── JobOpenings.jsx
│   │   ├── MyApplications.jsx
│   │   ├── InterviewSchedule.jsx
│   │   └── Notifications.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
