import './UserProfile.scss';

function ProfilePicture({ name }) {
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('');

  return <div className="profile-picture">{initials}</div>;
}

function UserProfile({ name }) {
  return (
    <div className="user-profile">
      <ProfilePicture name={name} />
    </div>
  );
}

export default UserProfile;
