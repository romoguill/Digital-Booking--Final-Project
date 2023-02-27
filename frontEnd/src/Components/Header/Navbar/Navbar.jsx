import { NavLink } from 'react-router-dom';

import './Navbar.scss';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={'/register'}
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link--empty nav-link--active hidden'
                : 'nav-link nav-link--empty'
            }
          >
            Crear Cuenta
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/login'}
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link--empty nav-link--active hidden'
                : 'nav-link nav-link--empty'
            }
          >
            Iniciar sesión
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
