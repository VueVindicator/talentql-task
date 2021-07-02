import React, { createContext } from 'react'
import  { loginStateType, loginDetailsType } from '../../setTypes'

const LoginState: loginStateType = {
    userDetails: {},
    userIsLoggedIn: false,
    isLoading: false,
    error: null,
    loginToApp: (loginDetails: loginDetailsType) => null,
    logoutOfApp: () => null,
}

const LoginContext = createContext(LoginState)

export default LoginContext;