import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./navigation.styles";
import LoginContext from "../../../store/login/loginContext";

const Navigation = () => {
  const { userIsLoggedIn, logoutOfApp } = useContext(LoginContext);

  function logoutHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    logoutOfApp();
  }
  return (
    <Nav>
      <div className="container">
        <NavLink to="/" className="nav-link">
          SHAPES
        </NavLink>
        <div className="nav-text">
          {userIsLoggedIn ? (
            <button className="logout" onClick={(e) => logoutHandler(e)}>
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </Nav>
  );
};

export default Navigation;
