import { useState, createContext } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);

     function addTodo(insertedText){
        const newTodo = {
            id: todos.length + 1,
            content: insertedText,
            isCompleted: false,
        };
        setTodos([...todos, newTodo]);
    };
    
    const myValue = { todos, addTodo };

    return(
        <TodoContext.Provider value={myValue}>{children}</TodoContext.Provider>
    );
}