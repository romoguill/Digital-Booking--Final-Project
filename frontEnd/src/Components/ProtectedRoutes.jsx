import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useLocalStorage from '../Hooks/useLocalStorage';

function ProtectedRoutes({ children, allowedRoles }) {
  const { auth, isLoading } = useAuth();

  const location = useLocation();

  if (isLoading) return;

  console.log(auth.userRole);
  if (allowedRoles.includes(auth.userRole)) {
    return children;
  } else {
    return <Navigate to="/unauthorized" />;
  }
}

export default ProtectedRoutes;
