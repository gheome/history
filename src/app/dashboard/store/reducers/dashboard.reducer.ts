import { DashboardActions, DashoboardActionTypes } from '../actions/dashboard.actions';

const initialState = {
  request: false,
  data: {
    urls: []
  },
  error: ''
};

export function DashboardReducer(state: any = initialState, action: DashboardActions) {
  switch (action.type) {
    case DashoboardActionTypes.GET_CAT_ACTION:
      return {
        ...state,
        request: true,
        error: '',
        data: {
          urls: []
        }
      };
    case DashoboardActionTypes.GET_CAT_SUCCESS_ACTION:
      return {
        ...state,
        request: false,
        data: {
          urls: [...state.data.urls, action.payload]
        },
        error: ''
      };
    default:
      return state;
  }
}
