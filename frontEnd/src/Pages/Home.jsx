import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import "../Pages/Home.css";
import Login from "./Login/Login";

const Home = ({ user, isLogged }) => {
  return (
    <div className="home-container">
      <h1>Home</h1>
      {isLogged ? (
        <>
          <p>Bienvenido {user} !</p>
          <div className="log-register-container">
            <Link to={"/login"}>
              <button className="home-btn">Ingresar</button>
            </Link>
            <Link to={"/register"}>
              <button className="home-btn">Registrarse</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="log-register-container">
          <Link to={"/login"}>
            <button className="home-btn">Ingresar</button>
          </Link>

          <Link to={"/register"}>
            <button className="home-btn">Registrarse</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
