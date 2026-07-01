import { Navigate } from 'react-router-dom';

function RedirectToLogin() {
    return <Navigate to="/login" replace />;
}

export default RedirectToLogin;