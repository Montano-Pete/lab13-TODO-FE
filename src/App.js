import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import './App.css';
import HomePage from './HomePage.js';
import SignUpPage from './SignUpPage.js';
import LoginPage from './LoginPage.js';
import TodoPage from './TodoPage.js';
  
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Header</h2>
          <Switch>
            <Route path="/" exact render={(routerProps) => <HomePage {...routerProps} />} />
            <Route path="/signup" exact render={(routerProps) => <SignUpPage {...routerProps} />} />
            <Route path="/login" exact render={(routerProps) => <LoginPage {...routerProps} />} />
            <Route path="/todo" exact render={(routerProps) => <TodoPage {...routerProps} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}