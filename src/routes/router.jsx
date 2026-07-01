import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import RedirectToLogin from './RedirectToLogin';
import LoginPage from '../containers/LoginPage/LoginPage';
import Dashboard from '../containers/Dashboard/Dashboard';
import ProfilePage from '../containers/ProfilePage/ProfilePage';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        Component: RedirectToLogin,
      },
      {
        path: 'login',
        Component: LoginPage,
      },
      {
        Component: ProtectedRoute,
        children: [
          {
            path: 'dashboard',
            Component: Dashboard,
          },
          {
            path: 'profile',
            Component: ProfilePage,
          },
        ],
      },
      {
        path: '*',
        Component: RedirectToLogin,
      },
    ],
  },
]);