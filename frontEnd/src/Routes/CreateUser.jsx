import React, { useEffect } from 'react';
import Input from '../Components/Login/Input';
import Title from '../Components/Login/Title';
import Label from '../Components/Login/Label';
import '../Routes/CreateUser.scss';
import { useState } from 'react';
import Home from './Home';
import { Link, useNavigate } from 'react-router-dom';
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
  const [submitError, setSubmitError] = useState(false);

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    emailError: false,
    firstNameError: false,
    lastNameError: false,
    passwordError: false,
    passwordAgainError: false,
  });

  useEffect(() => {
    if (passwordsMatch(password, passwordAgain) || passwordAgain.length === 0) {
      setErrors((prevErrors) => {
        return { ...prevErrors, passwordAgainError: false };
      });
    } else {
      setErrors((prevErrors) => {
        return { ...prevErrors, passwordAgainError: true };
      });
    }
  }, [password, passwordAgain]);

  function handleChange(name, value) {
    switch (name) {
      case 'email':
        setEmail(value);
        console.log(email);
        if (isValidEmail(value) || value.length === 0) {
          setErrors((prevErrors) => {
            return { ...prevErrors, emailError: false };
          });
        } else {
          setErrors((prevErrors) => {
            return { ...prevErrors, emailError: true };
          });
        }
        break;
      case 'firstName':
        setFirstName(value);
        if (value <= 1) {
          setErrors((prevErrors) => {
            return { ...prevErrors, firstNameError: true };
          });
        } else {
          setErrors((prevErrors) => {
            return { ...prevErrors, firstNameError: false };
          });
        }
        break;
      case 'lastName':
        setLastName(value);
        if (value <= 1) {
          setErrors((prevErrors) => {
            return { ...prevErrors, lastNameError: true };
          });
        } else {
          setErrors((prevErrors) => {
            return { ...prevErrors, lastNameError: false };
          });
        }
        break;
      case 'password':
        setPassword(value);

        if (isValidPassword(value) || value.length === 0) {
          setErrors((prevErrors) => {
            return { ...prevErrors, passwordError: false };
          });
        } else {
          setErrors((prevErrors) => {
            return { ...prevErrors, passwordError: true };
          });
        }
        break;
      case 'passwordAgain':
        setPasswordAgain(value);

        break;
    }
  }

  function handleSubmit() {
    const formHasErrors = Object.values(errors).some((value) => value === true);

    if (formHasErrors) {
      setSubmitError(true);
    } else {
      navigate('/login');
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
                        param={errors.firstNameError}
                        value={firstName}
                      />

                      {errors.firstNameError && (
                        <p className="input-error-msg">Nombre inválido</p>
                      )}
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
                        param={errors.lastNameError}
                        value={lastName}
                      />

                      {errors.lastNameError && (
                        <p className="input-error-msg">Nombre inválido</p>
                      )}
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

                  <div className="wrapper-error">
                    {submitError && (
                      <p className="input-error-msg error-form">
                        Por favor verifique los datos ingresados
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
