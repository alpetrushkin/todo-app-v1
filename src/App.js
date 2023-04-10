import {useState} from "react";
import {v1} from "uuid";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import './App.css';
import TodosAction from "./components/Todos/TodosAction";

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

   const checkedTaskHandler = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : {...todo}))
   }

   return (
      <div className="App">
         <h1>Todo App</h1>
         <TodoForm addTodo={addTodoHandler}/>
         <TodosAction/>
         <TodoList
            todos={todos}
            deleteTasks={deleteTasksHandler}
            checkedTask={checkedTaskHandler}
         />
      </div>
   );
}

export default App;
