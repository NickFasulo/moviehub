import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/views/Register/Register';
import Landing from './components/views/Landing/Landing';
import Navbar from './components/views/Navbar/Navbar';
import Footer from './components/views/Footer/Footer';
import Login from './components/views/Login/Login';

export default class MainRouter extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}
