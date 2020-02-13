import { UserRequestAction, UserRequestTypes } from '../actions/user-request.actions';


const initialState: any = {
  request: false,
  data: {
    email: '',
    accept: false,
    delete: false
  },
  error: ''
};

export function UserRequestReducer(state: any = initialState, action: UserRequestAction) {
  switch (action.type) {
    case UserRequestTypes.DELETE_USER_ACTION:
      return {
        ...state,
        data: {
          email: action.payload,
          enable: false,
          delete: true
        }
      };
    case UserRequestTypes.DELETE_USER_SUCCESS_ACTION:
      return initialState;
    case UserRequestTypes.ENABLE_USER_ACTION:
      return {
        ...state,
        data: {
          email: action.payload,
          enable: true,
          delete: false
        }
      };
    case UserRequestTypes.DISABLE_USER_ACTION:
      return {
        ...state,
        data: {
          email: action.payload,
          enable: false,
          delete: false
        }
      };
    default:
      return state;
  }
}
