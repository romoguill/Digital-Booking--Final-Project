import jwt_decode from 'jwt-decode';

import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { getItem, removeItem } = useLocalStorage();

  useEffect(() => {
    const token = getItem('token');

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
            Authorization: `Bearer ${getItem('token')}`,
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
      const tokenDecoded = jwt_decode(token);

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
      removeItem('token');
      setAuth({});
    }

    // const {
    //   sub: userEmail,
    //   apellido: userLastName,
    //   nombre: userName,
    //   exp: tokenExpireDate,
    // } = jwt_decode(token);
    // console.log(userLastName);

    // tokenExpireDate > new Date()
    //   ? removeItem('token')
    //   : setAuth({ userEmail, userLastName, userName });
    // } catch (error) {
    //   removeItem('token');
    // } finally {
    //   setIsLoading(false);
    // }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
