import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css';
import HomePage from './HomePage.js';
import SignUpPage from './SignUpPage.js';
import LoginPage from './LoginPage.js';
import TodoPage from './TodoPage.js';

const TOKEN = 'TOKEN'

export default class App extends Component {

  state = {
    token: localStorage.getItem(TOKEN)
  }

  login = (token) => {
    this.setState({ token })
    localStorage.setItem(TOKEN, token)
  }

  logout = () => {
    this.setState({ token: '' })
    localStorage.setItem(TOKEN, '')
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link> 
            <Link to="/login">Login</Link> 
            <Link to="/signup">SignUp</Link> 
            <Link to="/todo">Todo</Link> 
            <button onClick={this.logout}>Logout</button>
          </div>
          <Switch>
            <Route path="/" exact render={(routerProps) => <HomePage {...routerProps} />} />
            <Route path="/signup" exact render={(routerProps) => <SignUpPage login={this.login} {...routerProps} />} />
            <Route path="/login" exact render={(routerProps) => <LoginPage login={this.login} {...routerProps} />} />
            <Route path="/todo" exact render={(routerProps) =>
              this.state.token
                ? <TodoPage token={this.state.token} {...routerProps} />
                : <Redirect to="/" />
            }/>
          </Switch>
        </div>
      </Router>
    );
  }
}