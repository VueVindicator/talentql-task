import { loginActionTypes } from "store/types";

export type loginDetailsType = {
  _username: string;
  _password: string;
};

export type loginStateType = {
  userDetails: { _username: string; _password: string } | {};
  userIsLoggedIn: boolean;
  isLoading: boolean;
  error: null | string;
  loginToApp: (loginDetails: loginDetailsType) => void;
  logoutOfApp: () => void;
};

export type authActionType = loginSuccess | loginError | logout | isLoading;

export type loginSuccess = {
  type: loginActionTypes.loginSuccess;
  payload: { _username: string; _password: string };
};

export type loginError = {
  type: loginActionTypes.loginError;
  payload: string;
};

export type logout = {
  type: loginActionTypes.logout;
};

export type isLoading = {
  type: loginActionTypes.isLoading;
  payload: true;
};
