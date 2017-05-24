/**
 * Created by princegupta on 20/05/17.
 */

import {EventEmitter} from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
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
        this.archivedTodos = [];
    }

    createTodo(text){
        const id = Date.now();
        this.todos.push({
            id,
            text,
            compeleted : false
        });
        this.emit('change');
    }

    getIndex(id){
        var itemIndex = 0;
        for(var index = 0 ; index < this.todos.length; index ++){
            if(this.todos[index].id === id){
                itemIndex = index;
            }
        }
        return itemIndex;
    }

    deleteTodo(id){
        var item = this.todos.splice(this.getIndex(id),1);
        this.archiveTodo(item);
        this.emit('change');
    }

    doneTodo(id){
        this.todos[this.getIndex(id)].compeleted = true;
        this.emit('change');
    }

    archiveTodo(item){
        this.archivedTodos.push(item);
    }
    getArchivedTodos(){
        return this.archivedTodos;
    }

    getAll(){
        return this.todos;
    }

    handleAction(action){
        switch(action.type){
            case "CREATE_TODO" :{
                this.createTodo(action.text);
                break;
            }
            case "DELETE_TODO" :{
                this.deleteTodo(action.id);
                break;
            }
            case "DONE_TODO" :{
                this.doneTodo(action.id);
                break;
            }
        }
        console.log("TodoStore Recieved an action", action);
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));
export default todoStore;