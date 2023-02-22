import React, { useState } from 'react';
import Title from '../Components/Login/Title';
import Label from '../Components/Login/Label';
import Input from '../Components/Login/Input';
import Header from '../Components/Header/Header';
import { Link } from 'react-router-dom';
import './Login.scss';
import Footer from '../Components/Footer/Footer';
import HomeSearch from '../Components/Body/HomeSearch';
import CarrouselCategories from '../Components/Body/CarrouselCategories';
import GridRentals from '../Components/Body/GridRentals';
import MenuDrawerMobile from '../Components/MenuDrawerMobile/MenuDrawerMobile';

const Login = ({ menuDrawerVisible, setMenuDrawerVisible }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [hasError, setHasError] = useState(false);

  let localstorageData = localStorage.getItem('account');

  let lsd = JSON.parse(localstorageData);

  function handleChange(name, value) {
    if (name === 'usuario') {
      setUser(value);
      setHasError(false);
    } else {
      if (value.length < 6) {
        setPasswordError(true);
        setHasError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
        setHasError(false);
      }
    }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (
        (param.user === 'John Doe' && param.password === '123456') ||
        (user === lsd.username && password === lsd.password)
      ) {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem('account', account);
        setIsLogged(true);
      } else {
        setIsLogged(false);
        setHasError(true);
      }
    } else {
      setIsLogged(false);
      setHasError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
    }
  }

  return (
    <>
      {isLogged ? (
        <>
          {menuDrawerVisible && (
            <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
          )}
          <div className="container-page">
            <Header
              user={user}
              isLogged={isLogged}
              setMenuDrawerVisible={setMenuDrawerVisible}
            />
            <HomeSearch />
            <CarrouselCategories />
            <GridRentals />
            <Footer />
          </div>
        </>
      ) : (
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
                  {hasError && (
                    <label className="label-alert">
                      Por favor vuelva a intentarlo, sus credenciales son
                      inválidas
                    </label>
                  )}

                  <Label text="Usuario" />
                  <Input
                    attribute={{
                      id: 'usuario',
                      name: 'usuario',
                      type: 'text',
                      placeholder: 'Ingrese su mail',
                    }}
                    handleChange={handleChange}
                  />
                  <Label text="Contraseña" />
                  <Input
                    attribute={{
                      id: 'contraseña',
                      name: 'contraseña',
                      type: 'password',
                      placeholder: 'Ingrese su contraseña',
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                  />

                  {passwordError && (
                    <label className="label-error">
                      Contraseña inválida o incompleta
                    </label>
                  )}

                  <button
                    className="button-primary button-primary--full"
                    onClick={handleSubmit}
                  >
                    Ingresar
                  </button>
                  <h5 className="text-dark">
                    ¿Aún no tenes cuenta?
                    <span>
                      <Link to={'/register'} className="link-button">
                        <span> Registrate</span>
                      </Link>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Login;
