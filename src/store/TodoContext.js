import { createContext } from "react";

const TodoContext = createContext();

export default function TodoProvider({ children }) {
    return(
        <TodoContext.Provider>{children}</TodoContext.Provider>
    );
}