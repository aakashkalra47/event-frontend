import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { EventReducer } from './event_reducer';
import { AuthReducer } from './auth_reducer';

const rootReducer = combineReducers({
  events: EventReducer,
  auth: AuthReducer,
  form: formReducer
});

export default rootReducer;
