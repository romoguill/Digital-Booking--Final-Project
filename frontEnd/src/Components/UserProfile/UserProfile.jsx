import './UserProfile.scss';

function ProfilePicture({ name }) {
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('');

  return <div className="profile-picture">{initials}</div>;
}

function UserProfile({ name, mobile }) {
  return (
    <div className={`user-profile ${mobile ? 'mobile' : ''}`}>
      <ProfilePicture name={name} />
      <div className="user-profile__info">
        <p className="text-dark">Hola,</p>
        <p className="user-name">{name}</p>
      </div>
    </div>
  );
}

export default UserProfile;
