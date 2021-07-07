import React, { Component } from 'react'
import { addTodos, getTodos } from './functions.js'

export default class TodoPage extends Component {

    state = {
        todos: [],
        todo: ''
    }

    componentDidMount = async () => {
        const todos = await getTodos(this.props.token)

        this.setState({ todos })
    }

    handleSubmit = async e => {
        e.preventDefault();

        await addTodos(this.state.todo, this.props.token);

        const todos = await getTodos(this.props.token)

        this.setState({ todos })
    }

    handleName = e => {
        this.setState({ todo: e.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input onChange={this.handleName} />
                    </label>
                    <button>Add Todo!</button>
                </form>
                <div>
                    {
                        this.state.todos.map(item => <p> {item.todo} </p>)
                    }
                </div>
            </div>
        )
    }
}
