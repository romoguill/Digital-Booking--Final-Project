import useAuth from '../../Hooks/useAuth';
import './UserProfile.scss';

function ProfilePicture() {
  const { auth } = useAuth();
  const initials = auth?.userName.slice(0, 1) + auth?.userLastName.slice(0, 1);

  return <div className="profile-picture">{initials}</div>;
}

function UserProfile({ mobile }) {
  const { auth } = useAuth();
  return (
    <div className={`user-profile ${mobile ? 'mobile' : ''}`}>
      <ProfilePicture />
      <div className="user-profile__info">
        <p className="text-dark">Hola,</p>
        <p className="user-name">{`${auth?.userName} ${auth?.userLastName}`}</p>
      </div>
    </div>
  );
}

export default UserProfile;
