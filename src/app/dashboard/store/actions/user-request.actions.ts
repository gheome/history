import { Action } from '@ngrx/store';

export enum UserRequestTypes {
  DELETE_USER_ACTION = '[Users] Delete User',
  DELETE_USER_SUCCESS_ACTION = '[Users] Delete User Success',
  ENABLE_USER_ACTION = '[Users] Enable User',
  DISABLE_USER_ACTION = '[Users] Disable User'
}

export class DeleteUserAction implements Action {
  readonly type = UserRequestTypes.DELETE_USER_ACTION;
  constructor(public payload: string) { }
}

export class EnableUserAction implements Action {
  readonly type = UserRequestTypes.ENABLE_USER_ACTION;
  constructor(public payload: string) { }
}

export class DisableUserAction implements Action {
  readonly type = UserRequestTypes.DISABLE_USER_ACTION;
  constructor(public payload: string) { }
}

export class DeleteUserSuccessAction implements Action {
  readonly type = UserRequestTypes.DELETE_USER_SUCCESS_ACTION;
}

export type UserRequestAction =
DeleteUserAction |
DisableUserAction |
EnableUserAction |
DeleteUserSuccessAction;
