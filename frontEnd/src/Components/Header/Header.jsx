import logo from '../../assets/Images/app-logo-final.png';
import './Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

import UserProfile from '../UserProfile/UserProfile';

import { UserContext } from '../../Contexts/Context';
import Navbar from './Navbar/Navbar';

function Header({ setMenuDrawerVisible }) {
  const { userAuthInfo, setUserAuthInfo } = useContext(UserContext);

  function handleOpenDrawerMenu() {
    setMenuDrawerVisible(true);
  }

  function handleLogout() {
    setUserAuthInfo(false);
  }

  return (
    <header className="container-main">
      <Link to={'/'}>
        <img className="app-logo" src={logo} />
      </Link>

      {userAuthInfo.isLoggedIn ? (
        <div className="account-options">
          <UserProfile userInfo={userAuthInfo.userInfo} />
          <Link to={'/'} onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </Link>
        </div>
      ) : (
        <Navbar />
      )}

      {
        <button className="main-menu__hamburger" onClick={handleOpenDrawerMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      }
    </header>
  );
}

export default Header;
