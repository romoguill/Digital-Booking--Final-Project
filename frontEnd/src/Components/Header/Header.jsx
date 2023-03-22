import logo from '../../assets/Images/logo-digital-booking.png';
import './Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import UserProfile from '../UserProfile/UserProfile';

import Navbar from './Navbar/Navbar';
import useAuth from '../../Hooks/useAuth';

function Header({ setMenuDrawerVisible }) {
  const { auth } = useAuth();

  function handleOpenDrawerMenu() {
    setMenuDrawerVisible(true);
  }

  function handleLogout() {
    setUserAuthInfo(false);
  }

  return (
    <header>
      <div className="container-main">
        <Link className="app-logo-link" to={'/home'}>
          <img className="app-logo" src={logo} />
        </Link>

        {auth.isLoggedIn ? (
          <div className="account-options">
            <UserProfile userInfo={auth.userInfo} />
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
