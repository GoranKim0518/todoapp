import { createContext } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
    const myValue = '';
    return(
        <TodoContext.Provider value={myValue}>{children}</TodoContext.Provider>
    );
}