import React, { useReducer, useEffect } from 'react'
import LoginContext from './loginContext'
import LoginReducer, { init } from './loginReducer'
import { loginActionTypes } from '../types'
import { loginDetailsType } from '../../setTypes'

export type Props = {
    children: React.ReactNode
}

const LoginState = ({ children }: Props) => {
    const [state, dispatch] = useReducer(LoginReducer, [], init)

    useEffect(() => {
        localStorage.setItem("shapesData", JSON.stringify(state))
      }, [state])

    function loginToApp (loginDetails: loginDetailsType) {
        console.log(loginDetails)
        setLoading()

        try {
            dispatch({
                type: loginActionTypes.loginSuccess,
                payload: loginDetails
            })
        } catch (err) {
            dispatch({
                type: loginActionTypes.loginError,
                payload: 'There was an error logging you in. Please try again later'
            })
        }
    }

    function setLoading() {
        dispatch({
          type: loginActionTypes.isLoading,
          payload: true
        })
      }
    
      function logoutOfApp () {
        dispatch({
          type: loginActionTypes.logout,
        })
      }

    const context = {
        userIsLoggedIn: state.userIsLoggedIn,
        userDetails: state.userDetails,
        isLoading: state.isLoading,
        error: state.error,
        loginToApp,
        logoutOfApp,
    }

    return (
        <LoginContext.Provider value={ context }>
            { children }
        </LoginContext.Provider>
    )
}

export default LoginState