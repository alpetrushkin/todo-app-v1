import {useState} from "react";
import {v1} from "uuid";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import './App.css';

function App() {
   const [todos, setTodos] = useState([])
   console.log(todos)

   const addTodoHandler = (text) => {
      const newTodo = {title: text, isCompleted: false, id: v1()}
      setTodos([...todos, newTodo])
   }

   const deleteTasksHandler = (taskId) => {
      setTodos(todos.filter(el => el.id !== taskId))
   }

   return (
      <div className="App">
         <h1>Todo App</h1>
         <TodoForm addTodo={addTodoHandler}/>
         <TodoList
            todos={todos}
            deleteTasks={deleteTasksHandler}
         />
      </div>
   );
}

export default App;
