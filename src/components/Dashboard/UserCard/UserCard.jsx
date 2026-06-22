import styles from './UserCard.module.css';

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join('');
}

function UserCard({ user }) {
  return (
    <div className={styles['user-card']}>
      <div className={styles['user-card__avatar']}>
        {getInitials(user.name)}
      </div>
      <div className={styles['user-card__info']}>
        <p className={styles['user-card__name']}>{user.name}</p>
        <p className={styles['user-card__email']}>{user.email}</p>
      </div>
      <p className={styles['user-card__city']}>{user.address.city}</p>
    </div>
  );
}

export default UserCard;
