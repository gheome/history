import { LoginState } from '../models/login.model';
import { LoginAction, LoginActionTypes } from '../actions/login.actions';
const initialState: any = {
  request: false,
  data: {
    isAdmin: false,
    isLogged: false,
    email: ''
  },
  error: ''
};

export function LoginReducer(state: any = initialState, action: LoginAction) {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST_ACTION:
      console.log(state, action.payload);
      return {
        ...state,
        request: true
      };
    case LoginActionTypes.LOGIN_SUCCESS_USER_ACTION:
      console.log(state, action.payload);
      return {
        ...state,
        data: {
          email: action.payload,
          isAdmin: false,
          isLogged: true
        },
        request: false
      };
    case LoginActionTypes.LOGIN_SUCCESS_ADMIN_ACTION:
      console.log(state, action.payload);
      return {
        ...state,
        data: {
          email: action.payload.email,
          isAdmin: true,
          isLogged: true
        }
      };
    case LoginActionTypes.LOGIN_ERROR_ACTION:
      console.log(state);
      return {
        ...state,
          request: false,
          data: null,
          error: action.payload
        };
    case LoginActionTypes.LOGOUT_ACTION:
      console.log(state);
      return initialState;
    default:
      return state;
  }
}
