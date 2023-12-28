import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const PrivateRoute = ({ children }) => {
  const isAuth = useAuthStore(state => state.isAuth);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;
