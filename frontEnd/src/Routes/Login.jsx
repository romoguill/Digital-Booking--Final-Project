import Title from '../Components/Login/Title';
import Header from '../Components/Header/Header';
import './Login.scss';
import Footer from '../Components/Footer/Footer';
import MenuDrawerMobile from '../Components/MenuDrawerMobile/MenuDrawerMobile';

import FormLogin from '../Components/Form/FormLogin';

const Login = ({ menuDrawerVisible, setMenuDrawerVisible }) => {
  return (
    <>
      {menuDrawerVisible && (
        <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
      )}
      <div className="container-page">
        <div className="CreateUserContainer">
          <div className="createUserContent">
            <Header setMenuDrawerVisible={setMenuDrawerVisible} />
            <div className="formCreateUser">
              <Title text={<h1>Iniciar sesión</h1>} />
              <FormLogin
                errorMsgOnSubmit={
                  'Por favor vuelva a intentarlo, sus credenciales son inválidas'
                }
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
