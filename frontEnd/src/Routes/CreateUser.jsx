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
import CreateUserForm from '../Components/Form/CreateUserForm';

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
      {menuDrawerVisible && (
        <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
      )}
      <div className="container-page">
        <Header setMenuDrawerVisible={setMenuDrawerVisible} />
        <CreateUserForm />
        <Footer />
      </div>
    </>
  );
};

export default CreateUser;
