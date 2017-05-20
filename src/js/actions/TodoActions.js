/**
 * Created by princegupta on 20/05/17.
 */
import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
       type : "CREATE_TODO",
        text : text
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type : "DELETE_TODO",
        id : id
    })
}

export function doneTodo(id) {
    dispatcher.dispatch({
        type : "DONE_TODO",
        id : id
    })
}