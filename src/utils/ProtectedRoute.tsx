import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import FadeIn from "react-fade-in";
import LoginContext from "../store/login/loginContext";

interface RouteProp extends RouteProps {
  component: any;
}

const ProtectedRoute = ({ component: Component, ...rest }: RouteProp) => {
  const { userIsLoggedIn, isLoading } = useContext(LoginContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !userIsLoggedIn && !isLoading ? (
          <Redirect to="/login" />
        ) : (
          <FadeIn>
            <Component {...routeProps} />
          </FadeIn>
        )
      }
    />
  );
};

export default ProtectedRoute;
