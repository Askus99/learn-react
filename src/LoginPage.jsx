import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginPage.css';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Simple validation (replace with real API call)
      if (email) {
        // Successful login
        onLogin();
        navigate('/dashboard');
      } else {
        setError('Please enter the username');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="page-container login-container">
      <div className="login-wrapper">
        <div className="card">
          {/* Logo/Brand */}
          <div className="login-header">
            <div className="logo-icon">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="login-title">Devops Portal</h1>
            <p className="login-subtitle">Sign in to your account</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="error-message">
              <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}

          {/* Login Form */}
          <div className="login-form">
            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Username
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="you@example.com"
                disabled={isLoading}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox"
                  disabled={isLoading}
                />
                <span className="checkbox-text">Remember me</span>
              </label>
              <button 
                onClick={() => alert('Forgot password clicked')} 
                className="forgot-password"
                disabled={isLoading}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleSubmit} 
              className="btn btn-primary submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'SSO Login'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="footer-text">
          {new Date().getFullYear()} all right reserved
        </p>
      </div>
    </div>
  );
}