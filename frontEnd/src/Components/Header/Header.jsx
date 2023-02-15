import Brand from './Brand';

function Header() {
  return (
    <header>
      <Brand />
      <div>
        <button>Crear Cuenta</button>
        <button>Iniciar sesión</button>
      </div>
    </header>
  );
}

export default Header;
