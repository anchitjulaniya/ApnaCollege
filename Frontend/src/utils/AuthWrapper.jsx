// AuthWrapper.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function AuthWrapper() {
  // Ideally, auth state comes from context or hook, but using localStorage for example:
  const isLoggedIn = Boolean(localStorage.getItem('authToken'));

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Render protected child routes
}

export default AuthWrapper;
