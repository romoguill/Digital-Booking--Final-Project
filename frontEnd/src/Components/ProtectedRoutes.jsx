import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useLocalStorage from '../Hooks/useLocalStorage';

function ProtectedRoutes({ children, allowedRoles }) {
  const { auth } = useAuth();
  const { getItem } = useLocalStorage();
  const [userRole, setUserRole] = useState(null);

  console.log(auth);

  const location = useLocation();

  useEffect(() => {
    const getRole = async () => {
      if (auth?.userEmail) {
        console.log(auth);
        try {
          const response = await fetch(
            `${import.meta.env.VITE_BASE_API_URL}/usuarios/email=${
              auth.userEmail
            }`,
            {
              headers: {
                Authorization: `Bearer ${getItem('token')}`,
                'Content-type': 'application/json',
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
            setUserRole(data.rol?.id);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getRole();
  }, []);

  userRole;

  return children;
}

export default ProtectedRoutes;
