import React, { Component } from 'react'

export default class SignUpPage extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();

    }

    handleEmail = e => {
        this.setState({ email: e.target.value })
    }

    handlePassword = e => {
        this.setState({ password: e.target.value })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="email" onChange={this.handleEmail}/>
                    </label>
                    <label>
                        Password
                        <input type="password" onChange={this.handlePassword} />
                    </label>
                    <button>Create Account</button>
                </form>
            </div>
        )
    }
}
