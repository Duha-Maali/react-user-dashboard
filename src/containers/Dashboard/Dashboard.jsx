import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import UserCard from '../../components/Dashboard/UserCard/UserCard';
import { fetchUsers } from '../../services/userService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import styles from './Dashboard.module.css';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { username } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch(() => setError('Failed to load users. Please try again.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__container}>

        <div className={styles.dashboard__nav}>
          <div className={styles['dashboard__nav-left']}>
            <FontAwesomeIcon icon={faTableCellsLarge} />
            <span className={styles['dashboard__nav-title']}>Dashboard</span>
          </div>
          <button
            className={styles['dashboard__profile-btn']}
            onClick={() => navigate('/profile')}
          >
            <FontAwesomeIcon icon={faUser} />
            My profile
          </button>
        </div>

        <div className={styles.dashboard__body}>
          <div className={styles.dashboard__header}>
            <h2 className={styles.dashboard__heading}>Users</h2>
            <p className={styles.dashboard__subheading}>
              Welcome back, <strong>{username}</strong>
            </p>
          </div>

          {loading && (
            <div className={styles.dashboard__state}>
              <div className={styles.dashboard__spinner} />
              <p className={styles['dashboard__state-text']}>Loading users...</p>
            </div>
          )}

          {error && (
            <div className={`${styles.dashboard__state} ${styles['dashboard__state--error']}`}>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className={styles.dashboard__list}>
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
