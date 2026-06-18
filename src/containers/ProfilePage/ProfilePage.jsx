import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/Common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './ProfilePage.css';

function ProfilePage() {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-card__banner">
          <button
            className="profile-card__back"
            onClick={() => navigate('/dashboard')}
            aria-label="Back to dashboard"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <p className="profile-card__username">Profile</p>
        </div>

        <div className="profile-card__body">
          <p className="profile-card__name">{username}</p>
          <p className="profile-card__label">Logged in user</p>
          <Button label="Sign out" onClick={handleLogout} variant="danger" />
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;
