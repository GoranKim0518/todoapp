import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

export default function ToDoList() {
    const { todos } = useContext(TodoContext);
    return(
        <ul>
           {todos.map(todo => (<li key={todo.id}><div>{todo.content}</div></li>))} 
        </ul>
    );
}