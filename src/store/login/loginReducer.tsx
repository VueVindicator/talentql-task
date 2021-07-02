import { authActionType, loginStateType } from '../../setTypes'
import { loginActionTypes } from '../types'

const initState: any[] = [];
const stored: string = localStorage.getItem("shapesData") as string;

export const init = (initValue = initState) =>
  JSON.parse(stored) || initValue;

function loginReducer(state: loginStateType, action: authActionType): loginStateType {
  switch (action.type) {
    case loginActionTypes.loginSuccess:
      return {
        ...state,
        userIsLoggedIn: true,
        userDetails: action.payload,
        error: null,
        isLoading: false
      }
    case loginActionTypes.loginError:
      return {
        ...state,
        userIsLoggedIn: false,
        userDetails: {},
        error: action.payload,
        isLoading: false
      }
    case loginActionTypes.logout:
      return {
        ...state,
        userIsLoggedIn: false,
        userDetails: {},
        error: null,
        isLoading: false
      }
    case loginActionTypes.isLoading:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}

export default loginReducer