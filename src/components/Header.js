import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/index';
import { Link } from 'react-router-dom';

const Header = ({ token, logout }) => {
  return token ? (
    <button className="btn btn-danger" onClick={logout}>
      Logout
    </button>
  ) : (
    <div>
      <Link to="/signup" className="btn btn-danger" style={{ margin: 10 + 'px' }}>
        Sign Up
      </Link>
    </div>
  );
};

export default connect(null, { logout })(Header);
