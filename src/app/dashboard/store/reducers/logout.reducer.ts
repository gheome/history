import { LogoutAction, LogoutActionTypes } from '../actions/logout.actions';

const initialState: any = {
  request: false,
  data: {
    isAdmin: false,
    email: '',
    password: '',
    isLogged: true
  },
  error: ''
};

export function LogoutReducer(state: any = initialState, action: LogoutAction) {
  switch (action.type) {
    case LogoutActionTypes.LOGOUT_ACTION:
      return {
        ...state,
        data: {
          isLogged: false
        }
      };
    default:
      return state;
  }
}
