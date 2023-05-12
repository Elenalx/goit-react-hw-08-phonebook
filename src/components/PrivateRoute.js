import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsRefreshing, selectIsLoggedIn } from 'redux/auth/authSelector';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};