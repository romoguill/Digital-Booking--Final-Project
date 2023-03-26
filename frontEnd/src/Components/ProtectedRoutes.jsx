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

  useEffect(() => {}, []);

  userRole;

  return children;
}

export default ProtectedRoutes;
