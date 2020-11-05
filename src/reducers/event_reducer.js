import _ from 'lodash';
import { FETCH_EVENT, FETCH_EVENTS, DELETE_EVENT } from '../constants';

export function EventReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_EVENT:
      // const Post=action.payload.data;
      return { ...state, [action.payload.data._id]: action.payload.data };
    case FETCH_EVENTS:
      return _.mapKeys(action.payload.data, '_id');
    case DELETE_EVENT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
