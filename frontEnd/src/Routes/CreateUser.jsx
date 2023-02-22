import React from 'react';
import Input from '../Components/Login/Input';
import Title from '../Components/Login/Title';
import Label from '../Components/Login/Label';
import '../Routes/CreateUser.scss';
import { useState } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import MenuDrawerMobile from '../Components/MenuDrawerMobile/MenuDrawerMobile';

const CreateUser = ({ menuDrawerVisible, setMenuDrawerVisible }) => {
  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [created, setCreated] = useState(false);

  const [errors, setErrors] = useState({
    userError: false,
    firstNameError: false,
    lastNameError: false,
    passwordError: false,
    passwordAgainError: false,
  });

  function handleChange(name, value) {
    switch (name) {
      case 'user':
        if (value < 1) {
          setErrors({ ...errors, usernameError: true });
        } else {
          setErrors({ ...errors, usernameError: false });
          setUser(value);
        }
        break;
      case 'firstName':
        if (value < 1) {
          setErrors({ ...errors, firstNameError: true });
        } else {
          setErrors({ ...errors, firstNameError: false });
          setFirstName(value);
        }
        break;
      case 'lastName':
        if (value < 1) {
          setErrors({ ...errors, lastNameError: true });
        } else {
          setErrors({ ...errors, lastNameError: false });
          setLastName(value);
        }
        break;
      case 'password':
        if (value < 1) {
          setErrors({ ...errors, passwordError: true });
        } else {
          setErrors({ ...errors, passwordError: false });
          setPassword(value);
        }
        break;
      case 'passwordAgain':
        if (password.length < 6) {
          setErrors({ ...errors, passwordError: true });
        } else if (password === value) {
          setErrors({
            ...errors,
            passwordError: false,
            passwordAgainError: false,
          });
          setPasswordAgain(value);
        } else {
          setErrors({
            ...errors,
            passwordError: false,
            passwordAgainError: true,
          });
        }
        break;
    }
  }

  function handleSubmit() {
    let account = { user, firstName, lastName, password };
    if (account) {
      let ac = JSON.stringify(account);
      localStorage.setItem('account', ac);
      setTimeout(() => setCreated(true), 2000);
      setCreated(true);
    }
  }

  return (
    <>
      {created ? (
        <>
          {menuDrawerVisible && (
            <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
          )}
          <Home user={user} />
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
                  {/* <Link to={'/'}>
                <button type="button" class="close">
                  X
                </button>
              </Link> */}

                  <Title text={<h1>Crear cuenta</h1>} />
                  <div className="name-surname">
                    <div className="form-control">
                      <Label text="Nombre" />
                      <Input
                        className="regular-style-register"
                        attribute={{
                          name: 'firstName',
                          type: 'text',
                          placeholder: 'Ingrese su nombre',
                        }}
                        required
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="form-control">
                      <Label text="Apellido" />
                      <Input
                        attribute={{
                          name: 'lastName',
                          type: 'text',
                          placeholder: 'Ingrese su apellido',
                        }}
                        required
                        handleChange={handleChange}
                      />
                    </div>
                  </div>

                  <Label required text="E-mail" />
                  <Input
                    className="regular-style-register"
                    attribute={{
                      name: 'user',
                      type: 'email',
                      placeholder: 'Ingrese un mail',
                    }}
                    required
                    handleChange={handleChange}
                  />

                  <Label text="Contraseña" />
                  <Input
                    attribute={{
                      name: 'password',
                      type: 'password',
                      placeholder: 'Escriba una contraseña',
                    }}
                    required
                    handleChange={handleChange}
                    param={errors.passwordError}
                  />
                  {errors.passwordError && (
                    <label className="label-error">Mínimo 6 caracteres</label>
                  )}

                  <Label text="Confirmar contraseña" />
                  <Input
                    attribute={{
                      name: 'passwordAgain',
                      type: 'password',
                      placeholder: 'Confirme su contraseña',
                    }}
                    required
                    handleChange={handleChange}
                    param={passwordAgain}
                  />
                  {errors.passwordAgainError && (
                    <label className="label-error">
                      Las contraseñas no coinciden
                    </label>
                  )}

                  <button
                    className="button-primary button-primary--full"
                    onClick={handleSubmit}
                  >
                    Crear Cuenta
                  </button>

                  <div className="login-btn">
                    <h5 className="text-dark">
                      ¿Ya tienes una cuenta?
                      <span>
                        <Link to={'/login'} className="link-button">
                          <span className="register-click">
                            {' '}
                            Iniciar sesión
                          </span>
                        </Link>
                      </span>
                    </h5>
                  </div>
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

export default CreateUser;
