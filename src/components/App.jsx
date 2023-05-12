import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Register from 'pages/registerPage/Register';
import Login from 'pages/loginPage/Login';
import Contacts from 'pages/contactsPage/Contacts';
import NotFound from './notFound/NotFound';
import Navigation from './navigation/Navigation';

import css from 'components/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/authSelector';
import { refreshUser } from 'redux/auth/authOperation';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Home from 'pages/homePage/Home';
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing page...</b>
  ) : (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};