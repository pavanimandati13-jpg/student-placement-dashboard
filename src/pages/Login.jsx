import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if (email && password) {
      alert('Login Successful')
    } else {
      alert('Please enter email and password')
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

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Sign in to continue to your placement dashboard.
        </p>

        {/* Login Form */}
        <form className="professional-login-form" onSubmit={handleLogin}>

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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <span className="forgot-password">
              Forgot password?
            </span>
          </div>

          <button type="submit" className="professional-login-btn">
            Sign In →
          </button>

        </form>

        {/* Registration Link */}
        <div className="login-register">
          <span>Don't have an account?</span>

          <Link to="/registration">
            Create Account
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Login