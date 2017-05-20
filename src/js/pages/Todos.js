import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as Actions from "../actions/TodoActions"

export default class Todos extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll(),
        }

        this.getTodos = this.getTodos.bind(this);
    }

    getTodos(){
        this.setState({
            todos: TodoStore.getAll(),
        })
    }

    componentWillMount() {
        TodoStore.on('change', this.getTodos);
    }

    componentWillUnmount(){
        TodoStore.removeListener('change',this.getTodos);
    }

    createTodo() {
        Actions.createTodo(document.getElementById("newTodo").value);
    }

    render() {
        const {todos} = this.state;
        const TodoComponents = todos.map((todo) => <Todo key={todo.id} {...todo}/>)
        return (
            <div>
                <div class="row">
                    <input id="newTodo" class="col-sm-3"/>
                    <span class="col-sm-1">&nbsp;</span>
                    <button onClick={this.createTodo.bind(this)} class="btn btn-info col-sm-2">Add Todo</button>
                </div>
                <h1>Todos</h1>
                <div>{TodoComponents}</div>
            </div>
        );
    }
}