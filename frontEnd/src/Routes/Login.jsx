import React, { useContext, useState } from 'react';
import Title from '../Components/Login/Title';
import Label from '../Components/Login/Label';
import Input from '../Components/Login/Input';
import Header from '../Components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import Footer from '../Components/Footer/Footer';
import HomeSearch from '../Components/Body/HomeSearch';
import CarrouselCategories from '../Components/Body/CarrouselCategories';
import GridRentals from '../Components/Body/GridRentals';
import MenuDrawerMobile from '../Components/MenuDrawerMobile/MenuDrawerMobile';

import {
  isValidEmail,
  isValidPassword,
  passwordsMatch,
} from '../utils/validationForm';
import { UserContext } from '../Contexts/Context';

const Login = ({ menuDrawerVisible, setMenuDrawerVisible }) => {
  const { userAuthInfo, setUserAuthInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const authDataStored = JSON.parse(localStorage.getItem('account'));

  const validUserTest = {
    email: 'john@gmail.com',
    name: 'John',
    lastName: 'Doe',
    password: '123456',
  };

  function handleChange(name, value) {
    setSubmitError(false);
    if (name === 'email') {
      setEmail(value);
      if (isValidEmail(value) || value.length === 0) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    } else {
      setPassword(value);
      if (isValidPassword(value) || value.length === 0) {
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    }
  }

  function handleSubmit() {
    if (validUserTest.email === email && validUserTest.password === password) {
      setSubmitError(false);
      setUserAuthInfo({
        isLoggedIn: true,
        userInfo: {
          name: validUserTest.name,
          lastName: validUserTest.lastName,
          email: validUserTest.email,
        },
      });
      navigate('/');
    } else {
      setSubmitError(true);
    }
  }

  // function handleChange(name, value) {
  //   if (name === 'usuario') {
  //     setUser(value);
  //     setHasError(false);
  //   } else {
  //     if (value.length < 6) {
  //       setPasswordError(true);
  //       setHasError(false);
  //     } else {
  //       setPasswordError(false);
  //       setPassword(value);
  //       setHasError(false);
  //     }
  //   }
  // }

  // function ifMatch(param) {
  //   if (param.user.length > 0 && param.password.length > 0) {
  //     if (
  //       (param.user === 'John Doe' && param.password === '123456') ||
  //       (user === lsd.username && password === lsd.password)
  //     ) {
  //       const { user, password } = param;
  //       let ac = { user, password };
  //       let account = JSON.stringify(ac);
  //       localStorage.setItem('account', account);
  //       setIsLogged(true);
  //     } else {
  //       setIsLogged(false);
  //       setHasError(true);
  //     }
  //   } else {
  //     setIsLogged(false);
  //     setHasError(true);
  //   }
  // }

  // function handleSubmit() {
  //   let account = { user, password };
  //   if (account) {
  //     ifMatch(account);
  //   }
  // }

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
              <div className="form-control">
                <Label text="Usuario" />
                <Input
                  attribute={{
                    id: 'usuario',
                    name: 'email',
                    type: 'text',
                    placeholder: 'Ingrese su mail',
                  }}
                  handleChange={handleChange}
                  param={emailError}
                  value={email}
                />
                {emailError && (
                  <p className="input-error-msg">Email inválido</p>
                )}
              </div>

              <div className="form-control">
                <Label text="Contraseña" />
                <Input
                  className="input-error"
                  attribute={{
                    id: 'contraseña',
                    name: 'password',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña',
                  }}
                  handleChange={handleChange}
                  param={passwordError}
                  value={password}
                />

                {passwordError && (
                  <p className="input-error-msg">
                    Contraseña inválida o incompleta
                  </p>
                )}
              </div>
              <div className="wrapper-error">
                {submitError && (
                  <p className="input-error-msg error-form">
                    Por favor vuelva a intentarlo, sus credenciales son
                    inválidas
                  </p>
                )}
              </div>

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
  );
};

export default Login;
