import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import EventForm from './EventForm';
import EventList from './EventList';
import EventView from './EventView';
import LoginForm from './LoginForm';
import Header from './Header';
import SignupForm from './SignupForm';

class Navigation extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');

    this.props.dispatch({
      type: 'SET_TOKEN',
      payload: token
    });
  }

  render() {
    const token = this.props.auth.token;
    return (
      <BrowserRouter>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ textAlign: 'center', margin: 20, marginBottom: 40 }}>Event Manager</h1>
            </div>
            <Header token={token} />
          </div>
          {token ? (
            <Switch>
              <Route path="/events" exact component={EventList} />
              <Route path="/events/new" component={EventForm} />
              <Route path="/events/:id" component={EventView} />
              <Route path="/" component={EventList} />
            </Switch>
          ) : (
            <Switch>
              <Redirect from="/" to="/login" exact />
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={SignupForm} />
            </Switch>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect((state) => ({
  auth: state.auth
}))(Navigation);
