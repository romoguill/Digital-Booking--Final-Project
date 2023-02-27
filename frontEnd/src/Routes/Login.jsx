import Header from '../Components/Header/Header';
import './Login.scss';
import Footer from '../Components/Footer/Footer';
import MenuDrawerMobile from '../Components/MenuDrawerMobile/MenuDrawerMobile';
import UserLoginForm from '../Components/Form/UserLoginForm';

const Login = ({ menuDrawerVisible, setMenuDrawerVisible }) => {
  return (
    <>
      {menuDrawerVisible && (
        <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
      )}
      <div className="container-page">
        <h1>Iniciar sesión</h1>
        <UserLoginForm />

        <Footer />
      </div>
    </>
  );
};

export default Login;
