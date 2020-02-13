import { Action } from '@ngrx/store';
import { RegisterState, RegisterPayload } from '../models/register.model';

export enum RegisterActionTypes {
  REGISTER_USER_ACTION = '[Register] Register User',
  ACCEPT_USER_ACTION = '[Register] User accepted'
}

export class RegisterUserAction implements Action {
  readonly type = RegisterActionTypes.REGISTER_USER_ACTION;
  constructor(public payload: RegisterPayload) { }
}

export class AcceptUserAction implements Action {
  readonly type = RegisterActionTypes.ACCEPT_USER_ACTION;
  constructor(public payload: RegisterState) { }
}

export type RegisterAction =
RegisterUserAction |
AcceptUserAction;
