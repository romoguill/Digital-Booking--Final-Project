import React from "react";
import Input from "../Login/Components/Input/Input";
import Title from "../Login/Components/Title/Title";
import Label from "../Login/Components/Label/Label";
import "../CreateUser/CreateUser.css";
import { useState } from "react";
import Home from "../../../Routes/Home";
import { Link } from "react-router-dom";
import Header from "../Header";
import HomeSearch from "../../Body/HomeSearch";

const CreateUser = () => {
  const [user, setUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
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
      case "user":
        if (value < 1) {
          setErrors({ ...errors, usernameError: true });
        } else {
          setErrors({ ...errors, usernameError: false });
          setUser(value);
        }
        break;
      case "firstName":
        if (value < 1) {
          setErrors({ ...errors, firstNameError: true });
        } else {
          setErrors({ ...errors, firstNameError: false });
          setFirstName(value);
        }
        break;
      case "lastName":
        if (value < 1) {
          setErrors({ ...errors, lastNameError: true });
        } else {
          setErrors({ ...errors, lastNameError: false });
          setLastName(value);
        }
        break;
      case "password":
        if (value < 1) {
          setErrors({ ...errors, passwordError: true });
        } else {
          setErrors({ ...errors, passwordError: false });
          setPassword(value);
        }
        break;
      case "passwordAgain":
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
      localStorage.setItem("account", ac);
      setTimeout(() => setCreated(true), 2000);
      setCreated(true);
    }
  }

  return (
    <>
      {created ? 
        <>
          <Home user={user} />
        </>
        : 
        
            <div className="CreateUserContainer">
                
            <div className="createUserContent">
                <Header />
                <HomeSearch />
                <div className="formCreateUser">

                <Link to={"/"}>
                    <button type="button" class="close">
                        X
                    </button>
                </Link>
                
                <Title text={<h1>¡Cree una cuenta!</h1>} />
                
                <Label text="Nombre" />
                <Input
                    className="regular-style-register"
                    attribute={{
                    name: "firstName",
                    type: "text",
                    placeholder: "Ingrese su nombre",
                    }}
                    required
                    handleChange={handleChange}
                />

                <Label text="Apellido" />
                <Input
                    attribute={{
                    name: "lastName",
                    type: "text",
                    placeholder: "Ingrese su apellido",
                    }}
                    required
                    handleChange={handleChange}
                />

                <Label required text="E-mail" />
                <Input
                    className="regular-style-register"
                    attribute={{
                    name: "user",
                    type: "email",
                    placeholder: "Ingrese un mail",
                    }}
                    required
                    handleChange={handleChange}
                />

                <Label text="Contraseña" />
                <Input
                    attribute={{
                    name: "password",
                    type: "password",
                    placeholder: "Escriba una contraseña",
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
                    name: "passwordAgain",
                    type: "password",
                    placeholder: "Confirme su contraseña",
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

                <button className="button-login" onClick={handleSubmit}>
                    Registrarse
                </button>

                <div className="login-btn">
                    <h5>¿Ya tienes una cuenta?</h5>
                    <div className="login-btn-container">
                        <Link to={"/login"} className="link-button">
                            <span className="register-click">Loguéate</span>
                        </Link>
                    </div>
                  
                </div>
                </div>
            </div>
            </div>
        }
    </>
  );
};

export default CreateUser;