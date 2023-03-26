import jwt_decode from 'jwt-decode';

import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    storedValue: tokenStored,
    updateStorage: updateToken,
    removeFromStorage: removeTokenFromStorage,
  } = useLocalStorage('token', null);

  useEffect(() => {
    const tokenHasValidInfo = (tokenDecoded) => {
      const requiredKeys = ['sub', 'apellido', 'nombre', 'exp', 'iat'];
      return requiredKeys.every((requiredKey) =>
        Object.keys(tokenDecoded).includes(requiredKey)
      );
    };

    const setUserRole = async (userEmail) => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/usuarios/email=${userEmail}`,
        {
          headers: {
            Authorization: `Bearer ${tokenStored}`,
            'Content-type': 'application/json',
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setAuth((prevState) => ({ ...prevState, userRole: data.rol.id }));
      }
    };

    try {
      const tokenDecoded = jwt_decode(tokenStored);

      if (!tokenHasValidInfo(tokenDecoded)) {
        throw {
          name: 'InvalidTokenData',
          message: 'Token es valido pero sus datos no',
        };
      }

      if (tokenDecoded.exp > new Date()) {
        throw {
          name: 'TokenExpired',
          message: 'Token esta vencido',
        };
      }

      setAuth({
        userEmail: tokenDecoded.sub,
        userName: tokenDecoded.nombre,
        userLastName: tokenDecoded.apellido,
        userRole: '',
      });

      setUserRole(tokenDecoded.sub);
    } catch (error) {
      console.log(error);
      removeTokenFromStorage();
      setAuth({});
    } finally {
      setIsLoading(false);
    }
  }, [tokenStored]);

  const login = (token) => {
    updateToken(token);
  };

  const logout = () => {
    removeTokenFromStorage();
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
