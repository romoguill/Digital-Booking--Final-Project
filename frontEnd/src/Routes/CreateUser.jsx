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
import {
  isValidEmail,
  isValidPassword,
  passwordsMatch,
} from '../utils/validationForm';

const CreateUser = ({ menuDrawerVisible, setMenuDrawerVisible }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [created, setCreated] = useState(false);

  const [errors, setErrors] = useState({
    emailError: false,
    firstNameError: false,
    lastNameError: false,
    passwordError: false,
    passwordAgainError: false,
  });

  function handleChange(name, value) {
    switch (name) {
      case 'email':
        setEmail(value);
        console.log(email);
        if (isValidEmail(value) || value.length === 0) {
          setErrors({ ...errors, emailError: false });
        } else {
          setErrors({ ...errors, emailError: true });
        }
        break;
      case 'firstName':
        setFirstName(value);
        if (value < 1) {
          setErrors({ ...errors, firstNameError: true });
        } else {
          setErrors({ ...errors, firstNameError: false });
        }
        break;
      case 'lastName':
        setLastName(value);
        if (value < 1) {
          setErrors({ ...errors, lastNameError: true });
        } else {
          setErrors({ ...errors, lastNameError: false });
        }
        break;
      case 'password':
        setPassword(value);

        if (isValidPassword(value) || value.length === 0) {
          setErrors({ ...errors, passwordError: false });
        } else {
          setErrors({ ...errors, passwordError: true });
        }
        break;
      case 'passwordAgain':
        setPasswordAgain(value);
        if (passwordsMatch(password, passwordAgain)) {
          console.log(passwordsMatch(password, passwordAgain));
          setErrors({ ...errors, passwordAgainError: false });
        } else {
          setErrors({
            ...errors,
            passwordAgainError: true,
          });
        }
        break;
    }
  }

  function handleSubmit() {
    let account = { email, firstName, lastName, password };
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
                        attribute={{
                          name: 'firstName',
                          type: 'text',
                          placeholder: 'Ingrese su nombre',
                        }}
                        required
                        handleChange={handleChange}
                        value={firstName}
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
                        value={lastName}
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <Label required text="E-mail" />
                    <Input
                      attribute={{
                        name: 'email',
                        type: 'email',
                        placeholder: 'Ingrese un mail',
                      }}
                      required
                      handleChange={handleChange}
                      param={errors.emailError}
                      value={email}
                    />

                    {errors.emailError && (
                      <p className="input-error-msg">Email inválido</p>
                    )}
                  </div>

                  <div className="form-control">
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
                      value={password}
                    />
                    {errors.passwordError && (
                      <p className="input-error-msg">Mínimo 6 caracteres</p>
                    )}
                  </div>

                  <div className="form-control">
                    <Label text="Confirmar contraseña" />
                    <Input
                      attribute={{
                        name: 'passwordAgain',
                        type: 'password',
                        placeholder: 'Confirme su contraseña',
                      }}
                      required
                      handleChange={handleChange}
                      param={errors.passwordAgainError}
                      value={passwordAgain}
                    />
                    {errors.passwordAgainError && (
                      <p className="input-error-msg">
                        Las contraseñas no coinciden
                      </p>
                    )}
                  </div>

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
