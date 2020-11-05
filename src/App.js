import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers/index';
import Navigation from './components/Navigation';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const store = createStoreWithMiddleware(reducers);

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log('2. token = ', token);

    store.dispatch({
      type: 'SET_TOKEN',
      payload: token
    });
  }

  render() {
    const token = store.getState().auth.token;
    console.log('1. token = ', token);
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
