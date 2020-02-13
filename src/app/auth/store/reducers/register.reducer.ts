import { RegisterState } from '../models/register.model';
import { RegisterActionTypes, RegisterAction } from '../actions/register.actions';

const initialState: RegisterState = {
  request: false,
  data: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  },
  error: ''
};

export function RegisterReducer(state: RegisterState = initialState, action: RegisterAction) {
  switch (action.type) {
    case RegisterActionTypes.REGISTER_USER_ACTION:
      console.log(state);
      return {
        ...state,
        data: {
          lastName: action.payload.lastName,
          email: action.payload.email,
          password: action.payload.password,
          approved: false,
        }
      };
    case RegisterActionTypes.ACCEPT_USER_ACTION:
      console.log(state);
      return {
        ...state,
        data: {
          firstName: action.payload.data.firstName,
          lastName: action.payload.data.lastName,
          email: action.payload.data.email,
          password: action.payload.data.password,
          approved: true,
        }
    };
    default:
      return state;
  }
}
