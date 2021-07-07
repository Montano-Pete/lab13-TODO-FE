import React, { Component } from 'react'
import { addTodos, completeTodos, getTodos } from './functions.js'

export default class TodoPage extends Component {

    state = {
        todos: [],
        todo: ''
    }

    componentDidMount = async () => {
        await this.doFetch()
    }

    doFetch = async () => {
        const todos = await getTodos(this.props.token)

        this.setState({ todos })
    }

    handleSubmit = async e => {
        e.preventDefault();

        await addTodos(this.state.todo, this.props.token);

        await this.doFetch()
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
                        this.state.todos.map(item =>
                            <p
                                className={item.completed ? 'complete' : 'incomplete'}
                                
                                key={`${item.todo} ${item.id}`}
                                
                                onClick={async () => {
                                    await completeTodos(item.id, this.props.token)
                                    
                                    await this.doFetch()
                                }}
                            >
                            {item.todo}
                            </p>)
                    }
                </div>
            </div>
        )
    }
}
