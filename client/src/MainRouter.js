import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Toastify from './components/toastify/Toastify';

const Register = React.lazy(() => import('./components/views/Register/Register'));
const Navbar = React.lazy(() => import('./components/views/Navbar/Navbar'));
const Login = React.lazy(() => import('./components/views/Login/Login'));

export default class MainRouter extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Toastify />
        <Switch>
          <Route exact path="/sign-up" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </>
    );
  }
}
