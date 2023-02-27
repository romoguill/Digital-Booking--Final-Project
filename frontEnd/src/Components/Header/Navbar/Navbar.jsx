import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={'/register'}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            Crear Cuenta
          </NavLink>
        </li>
        <li>
          <NavLink to={'/login'}>Iniciar sesión</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
