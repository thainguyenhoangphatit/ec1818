import { createTodoSelector } from "../reselect";
import { requestFetchTodos } from "./actions";

export const mapDispatchToProps = {
    requestFetchTodos
}

export const mapStateToProps = state => {
    return {
        todos: createTodoSelector(state)        
    }
}