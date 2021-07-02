import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { LoginContainer, FormControl, ButtonControl } from "./login.styles";
import { trimValue } from "../../../utils/helpers";
import LoginContext from "../../../store/login/loginContext";

const Login = () => {
  const [username, setUserName] = useState<string>("theusername");
  const [password, setPassword] = useState<string>("thepassword");
  const { loginToApp, userIsLoggedIn } = useContext(LoginContext);
  const history = useHistory();

  const notifyError = (errorMessage: string) => toast.error(errorMessage);
  const notifySuccess = (successMessage: string) =>
    toast.success(successMessage);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let _username = trimValue(username);
    let _password = trimValue(password);

    if (_username === "" || _password === "") {
      notifyError("Please enter a username and password");
    }

    if (_username.match("theusername") && _password.match("thepassword")) {
      //   notifySuccess("You are successfully logged In");
      loginToApp({ _username, _password });
    } else {
      notifyError("Login details provided is invalid");
    }
  }

  useEffect(() => {
    if (userIsLoggedIn) {
      history.push("/");
    }
  }, [userIsLoggedIn]);

  return (
    <LoginContainer>
      <div className="login-card">
        <form data-testid="login-form" onSubmit={(e) => submitHandler(e)}>
          <FormControl>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="text"
              data-testid="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Please enter your Username"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              data-testid="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please enter your Password"
            />
          </FormControl>
          <ButtonControl>
            <button data-testid="submit" type="submit">
              Login
            </button>
          </ButtonControl>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </LoginContainer>
  );
};

export default Login;
