import React from "react";

import Todo from "../components/Todo";
export default class Todos extends React.Component{

    constructor(){
        super();
        this.state = {
            todos : [
                {
                    id : 123456,
                    text : "Purchase Grocery",
                    compeleted : true
                },
                {
                    id : 123459,
                    text : "Purchase Fruits",
                    compeleted : false
                },
                {
                    id : 1234510,
                    text : "Recharge Mobile",
                    compeleted : false
                }
            ]
        }
    }

    render(){
        const {todos} = this.state;
        const TodoComponents = todos.map((todo) => <Todo key={todo.id} {...todo}/>)
        return(
            <div>{TodoComponents}</div>
        );
    }
}