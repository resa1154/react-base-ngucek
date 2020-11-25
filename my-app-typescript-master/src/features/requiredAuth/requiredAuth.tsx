import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Redirect } from "react-router-dom";

const requiredAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const user = useSelector((state: RootState) => state.user);

    if (user.token) {
      return <Component />;
    }

    return <Redirect to="/login" />;
  };

  return AuthenticatedComponent;
};

export default requiredAuth;
