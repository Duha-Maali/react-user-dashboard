import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import InputField from '../../components/Login/InputField/InputField';
import Button from '../../components/Common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const { login, username: loggedInUser } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (loggedInUser) {
      navigate('/dashboard');
    }
  }, [loggedInUser, navigate]);

  // Auto-focus input on mount via useRef
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleLogin = () => {
    if (!username.trim()) {
      setError('Please enter a username.');
      return;
    }
    login(username.trim());
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-card__icon">
          <FontAwesomeIcon icon={faUser} />
        </div>

        <h1 className="login-card__title">User login</h1>
        <p className="login-card__subtitle">Enter your username to continue</p>

        <div className="login-card__form">
          <InputField
            ref={inputRef}
            value={username}
            onChange={(e) => { setUsername(e.target.value); setError(''); }}
            placeholder="Username"
          />
          {error && <p className="login-card__error">{error}</p>}
          <Button label="Login" onClick={handleLogin} variant="primary" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
