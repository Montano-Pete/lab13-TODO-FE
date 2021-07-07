import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './HomePage.js';
import SignUpPage from './SignUpPage.js';
import LoginPage from './LoginPage.js';
import TodoPage from './TodoPage.js';
  
export default class App extends Component {

  state = {
    token: ''
  }

  login = (token) => {
    this.setState({ token })
    localStorage.setItem('TOKEN', token)
  }

  logout = () => {
    this.setState({ token: '' })
    localStorage.setItem('TOKEN', '')
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <p> <Link to="/">Home</Link> </p>
            <p> <Link to="/login">Login</Link> </p>
            <p> <Link to="/signup">SignUp</Link> </p>
            <p> <Link to="/todo">Todo</Link> </p>
          </div>
          <Switch>
            <Route path="/" exact render={(routerProps) => <HomePage {...routerProps} />} />
            <Route path="/signup" exact render={(routerProps) => <SignUpPage login={this.login} {...routerProps} />} />
            <Route path="/login" exact render={(routerProps) => <LoginPage login={this.login} {...routerProps} />} />
            <Route path="/todo" exact render={(routerProps) => <TodoPage {...routerProps} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}