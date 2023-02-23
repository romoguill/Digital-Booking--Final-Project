import './UserProfile.scss';

function ProfilePicture({ userInfo }) {
  const initials = userInfo.name.slice(0, 1) + userInfo.lastName.slice(0, 1);

  return <div className="profile-picture">{initials}</div>;
}

function UserProfile({ userInfo, mobile }) {
  return (
    <div className={`user-profile ${mobile ? 'mobile' : ''}`}>
      <ProfilePicture userInfo={userInfo} />
      <div className="user-profile__info">
        <p className="text-dark">Hola,</p>
        <p className="user-name">{`${userInfo.name} ${userInfo.lastName}`}</p>
      </div>
    </div>
  );
}

export default UserProfile;
