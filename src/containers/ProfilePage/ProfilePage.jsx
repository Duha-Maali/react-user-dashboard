import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/Common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={styles['profile-page']}>
      <div className={styles['profile-card']}>

        <div className={styles['profile-card__banner']}>
          <button
            className={styles['profile-card__back']}
            onClick={() => navigate('/dashboard')}
            aria-label="Back to dashboard"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <p className={styles['profile-card__username']}>Profile</p>
        </div>

        <div className={styles['profile-card__body']}>
          <p className={styles['profile-card__name']}>{username}</p>
          <p className={styles['profile-card__label']}>Logged in user</p>
          <Button label="Sign out" onClick={handleLogout} variant="danger" />
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;
