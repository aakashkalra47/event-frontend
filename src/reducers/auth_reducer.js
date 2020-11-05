import { LOGIN, SIGNUP, SET_TOKEN, LOGOUT } from '../constants';

export function AuthReducer(state = {}, action) {
  switch (action.type) {
    case SIGNUP:
      console.log('1. action.payload = ', action.payload);
      return action.payload.data;
    case LOGIN:
      console.log('2. action.payload = ', action.payload);
      return action.payload.data;
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case LOGOUT:
      console.log('3. logout');
      return {};
    default:
      return state;
  }
}
