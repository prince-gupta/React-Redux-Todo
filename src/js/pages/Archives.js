/**
 * Created by princegupta on 20/05/17.
 */
import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";


export default class Archives extends React.Component{
    constructor(){
        super();
        this.state = {
            todos : TodoStore.getArchivedTodos()
        }
        this.getArchivedTodos = this.getArchivedTodos.bind(this);
    }
    getArchivedTodos(){
        this.setState({
            todos: TodoStore.getArchivedTodos()
        })
    }
    render(){
        const {todos} = this.state;
        const TodoComponents = todos.map((todo) => <Todo key={todo.id} {...todo}/>)
        console.log(todos);
        return (
            <div>
                <h1>Archived Todos</h1>
                <div>{TodoComponents}</div>
            </div>
        );
    }
}
