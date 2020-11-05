import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../actions/index';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.cbFunction = this.cbFunction.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  renderEvents() {
    return _.map(this.props.events, (event) => {
      return (
        <li className="list-group-item" key={event._id}>
          <Link to={`/events/${event._id}`}>{event.name}</Link>
        </li>
      );
    });
  }

  cbFunction() {}

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/events/new">
            Add a Event
          </Link>
        </div>
        <h3>events</h3>
        <ul className="list-group">{this.renderEvents()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { events: state.events };
}

export default connect(mapStateToProps, { fetchEvents })(EventList);
