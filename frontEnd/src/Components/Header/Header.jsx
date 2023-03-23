import logo from '../../assets/Images/logo-digital-booking.png';
import './Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import UserProfile from '../UserProfile/UserProfile';

import Navbar from './Navbar/Navbar';
import useAuth from '../../Hooks/useAuth';
import useLocalStorage from '../../Hooks/useLocalStorage';

function Header({ setMenuDrawerVisible }) {
  const { auth, setAuth } = useAuth();
  const { removeItem } = useLocalStorage();
  const navigate = useNavigate();

  function handleOpenDrawerMenu() {
    setMenuDrawerVisible(true);
  }

  function handleLogout() {
    setAuth(null);
    removeItem('token');
    navigate('/');
  }

  return (
    <header>
      <div className="container-main">
        <Link className="app-logo-link" to={'/home'}>
          <img className="app-logo" src={logo} />
        </Link>

        {auth?.userEmail ? (
          <div className="account-options">
            <UserProfile />
            <Link to={'/'} onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </Link>
          </div>
        ) : (
          <Navbar />
        )}

        {
          <button
            className="main-menu__hamburger"
            onClick={handleOpenDrawerMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        }
      </div>
    </header>
  );
}

export default Header;
