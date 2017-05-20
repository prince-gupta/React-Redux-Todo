import React from "react";

export default class Todo extends React.Component{
    render(){
        const {id, text, compeleted} = this.props;
        const icon = compeleted ? "\u2714" : "\u2716"
        return (
            <li>
                <span>{text}</span><span>{icon}</span>
            </li>
        );
    }
}