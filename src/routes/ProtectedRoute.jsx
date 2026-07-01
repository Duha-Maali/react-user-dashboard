import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function ProtectedRoute() {
  const { username } = useAuth();

  return username ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;