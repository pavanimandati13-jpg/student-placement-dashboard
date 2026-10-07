import { useState } from 'react'
import { Link } from 'react-router-dom'

function Registration() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()

    if (name && email && password) {
      alert('Registration Successful')
    } else {
      alert('Please fill all fields')
    }
  }

  return (
    <div className="login-page">

      <div className="login-card">

        {/* Logo */}
        <div className="login-logo">
          🎓
        </div>

        <p className="section-label">STUDENT PLACEMENT PORTAL</p>

        <h1>Create Account</h1>

        <p className="login-subtitle">
          Register to access placement opportunities and track your career journey.
        </p>

        {/* Registration Form */}
        <form
          className="professional-login-form"
          onSubmit={handleRegister}
        >

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="professional-login-btn"
          >
            Create Account →
          </button>

        </form>

        {/* Login Link */}
        <div className="login-register">

          <span>Already have an account?</span>

          <Link to="/">
            Sign In
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Registration