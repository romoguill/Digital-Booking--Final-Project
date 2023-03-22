import jwt_decode from 'jwt-decode';

import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const { getItem, removeItem } = useLocalStorage();

  useEffect(() => {
    const token = getItem('token');
    try {
      const {
        sub: userEmail,
        apellido: userLastName,
        nombre: userName,
        exp: tokenExpireDate,
      } = jwt_decode(token);
      tokenExpireDate > new Date()
        ? removeItem('token')
        : setAuth({ userEmail, userLastName, userName });
    } catch (error) {
      removeItem('token');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
