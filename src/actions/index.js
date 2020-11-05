import axios from 'axios';
import { FETCH_EVENTS, FETCH_EVENT, DELETE_EVENT, LOGIN, SIGNUP, LOGOUT } from '../constants';

export const createEvent = (data = {}, callback) => {
  const result = axios({
    url: 'http://localhost:5000/event',
    method: 'post',
    data
  }).then(() => callback());

  return {
    type: 'CREATE_EVENT',
    payload: result
  };
};

export const fetchEvents = () => {
  const events = axios.get('http://localhost:5000/events');
  return {
    type: FETCH_EVENTS,
    payload: events
  };
};

export function fetchEvent(id) {
  const event = axios.get(`http://localhost:5000/events/${id}`);
  return {
    type: FETCH_EVENT,
    payload: event
  };
}

export function deleteEvent(id, callback) {
  const request = axios.delete(`http://localhost:5000/events/${id}`).then(() => callback());
  return {
    type: DELETE_EVENT,
    payload: request
  };
}

export const login = (data, callback) => {
  const login = axios.post('http://localhost:5000/auth/login', data).then((result) => {
    callback(result.data);
    return result;
  });

  return {
    type: LOGIN,
    payload: login
  };
};

export const signup = (data) => {
  const signup = axios.post('http://localhost:5000/auth/signup', data);
  return {
    type: SIGNUP,
    payload: signup
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: LOGOUT
  };
};
