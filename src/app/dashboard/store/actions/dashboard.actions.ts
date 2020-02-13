import { Action } from '@ngrx/store';

export enum DashoboardActionTypes {
  GET_CAT_ACTION = '[Dashboard] Get Cat Action',
  GET_CAT_SUCCESS_ACTION = '[Dashboard] Get Cat Success Action'
}

export class GetCatAction implements Action {
  readonly type = DashoboardActionTypes.GET_CAT_ACTION;
}

export class GetCatSuccessAction implements Action {
  readonly type = DashoboardActionTypes.GET_CAT_SUCCESS_ACTION;
  constructor(public payload: string) { }
}

export type DashboardActions =
GetCatAction |
GetCatSuccessAction;
