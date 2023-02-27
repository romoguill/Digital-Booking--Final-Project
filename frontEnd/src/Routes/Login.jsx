import './Login.scss';

import MenuDrawerMobile from '../Components/Header/MenuDrawerMobile/MenuDrawerMobile';
import UserLoginForm from '../Components/Form/UserLoginForm';

const Login = ({ menuDrawerVisible, setMenuDrawerVisible }) => {
  return (
    <div className="container-page">
      {menuDrawerVisible && (
        <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
      )}
      <h1>Iniciar sesión</h1>
      <UserLoginForm />
    </div>
  );
};

export default Login;
