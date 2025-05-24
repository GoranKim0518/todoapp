import { TodoProvider } from './store/TodoContext.jsx';
import './App.css'
import Header from '../src/components/Header.jsx'
import InsertTodo from '../src/components/InsertTodo.jsx'
import ToDoList from './components/ToDoList.jsx';

function App() {

  return (
    <TodoProvider>
      <Header />
      <InsertTodo />
      <ToDoList />
    </TodoProvider>
  )
}

export default App