import React from "react";
import * as Action from "../actions/TodoActions";

export default class Todo extends React.Component{

    deleteTodo(id,e){
        Action.deleteTodo(id);
    }
    doneTodo(id,compeleted, e){
        if(compeleted !== true) {
            Action.doneTodo(id);
        }
    }
    render(){
        const {id, text, compeleted} = this.props;
        const icon = compeleted ? "\u2714" : "\u2716"
        return (
            <li>
                <span>{text}</span><span onClick={this.doneTodo.bind(this,id)}>{icon}</span>&nbsp;
                <i class="glyphicon glyphicon-trash danger" onClick={this.deleteTodo.bind(this,id,compeleted)}></i>
            </li>
        );
    }
}