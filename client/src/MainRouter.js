import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/views/Register/Register';
import Landing from './components/views/Landing/Landing';
import Navbar from './components/views/Navbar/Navbar';
import Footer from './components/views/Footer/Footer';
import Login from './components/views/Login/Login';
import Auth from './hoc/auth';

export default class MainRouter extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component={Auth(Landing, null)} />
            <Route exact path="/login" component={Auth(Login, false)} />
            <Route exact path="/register" component={Auth(Register, false)} />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}
