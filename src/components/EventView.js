import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvent } from '../actions/index';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../actions/index';

class EventView extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchEvent(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deleteEvent(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { event } = this.props;
    if (!event) {
      return <div>Loading..</div>;
    }
    return (
      <div>
        <Link className="btn btn-primary" to="/">
          Back to List
        </Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
          Delete Event
        </button>
        <h3>{event.name}</h3>
        <h6>{event.description}</h6>
        <p>{event.count}</p>
      </div>
    );
  }
}

function mapStateToProps({ events }, ownProps) {
  return { event: events[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchEvent, deleteEvent })(EventView);
