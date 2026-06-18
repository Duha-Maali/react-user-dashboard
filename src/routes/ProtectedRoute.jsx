import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function ProtectedRoute({ children }) {
  const { username } = useAuth();

  if (!username) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
