import './UserCard.css';

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join('');
}

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-card__avatar">
        {getInitials(user.name)}
      </div>
      <div className="user-card__info">
        <p className="user-card__name">{user.name}</p>
        <p className="user-card__email">{user.email}</p>
      </div>
      <p className="user-card__city">{user.address.city}</p>
    </div>
  );
}

export default UserCard;
