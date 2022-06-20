import { Navigate } from "react-router-dom";
import React from "react";
const PrivateRoute = ({ children }) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
