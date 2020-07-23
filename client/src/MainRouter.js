import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// const Signup = React.lazy(() => import('./components/signup/Signup'));
// const Navbar = React.lazy(() => import('./components/navbar/Navbar'));
// const Login = React.lazy(() => import('./components/login/Login'));

export default class MainRouter extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </>
    );
  }
}
