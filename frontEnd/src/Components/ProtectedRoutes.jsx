import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

function ProtectedRoutes({ children, allowedRoles }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoutes;
