import React, { useState } from "react";
import Title from "./Components/Title/Title";
import Label from "./Components/Label/Label";
import Input from "./Components/Input/Input";
import '../Login/Login.css'
import Home from "../Home";
import { Link } from "react-router-dom";


const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [hasError, setHasError] = useState(false);

    let localstorageData = localStorage.getItem('account')

    let lsd = JSON.parse(localstorageData)

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
            if (param.user === 'manuzarraga@hotmail.com' && param.password === '123456' ||
            user === lsd.username && 
            password === lsd.password ) {
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
        let account = {user, password};
        if (account){
            ifMatch(account)
        }

    }

    return (
        <div className="login-container">
            { isLogged ?
                <>
                    <Home user={user} isLogged={isLogged}/>
                </>
            :
            <>
                <Title text={<h1>¡Bienvenido!</h1>} />
                { hasError &&
                    <label className="label-alert">
                        Por favor vuelva a intentarlo, sus credenciales son inválidas
                    </label>
                }
                
                <Label text='Usuario'/>
                <Input
                attribute={{
                    id:'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su mail'
                }}
            
                handleChange={handleChange}
                />
                <Label text='Contraseña'/>
                <Input
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña'
                }}

                handleChange={handleChange}
                param={passwordError}
                />

                {passwordError &&
                    <label className="label-error">
                        Contraseña inválida o incompleta
                    </label>
                }
                
                <button className="button-login" onClick={handleSubmit}>
                    Ingresar
                </button>
                
                <Link to={"/register"} className="link-button">
                    <h5>¿No tienes una cuenta? <span>Regístrate</span></h5>
                </Link>
                
            </>
            }
        </div>
    )
}

export default Login;