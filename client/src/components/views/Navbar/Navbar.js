import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthNavLinks from './AuthNavLinks';
import UnAuthNavLinks from './UnAuthNavLinks';
import { connect } from 'react-redux';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    const { isAuthenticated, user } = this.props.authUser;
    return (
      <header>
        <NavLink
          to="/"
          className="navbar-home"
          activeStyle={{ fontWeight: 'bold' }}
          activeClassName="selected"
          exact
        >
          Home
        </NavLink>
        <nav>
          {user && isAuthenticated ? (
            <AuthNavLinks
              {...user}
              {...isAuthenticated}
              logout={this.props.logout}
            />
          ) : (
            <UnAuthNavLinks />
          )}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
