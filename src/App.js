import {useState} from "react";
import {v1} from "uuid";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import './App.css';
import TodosAction from "./components/Todos/TodosAction";

function App() {
   const [todos, setTodos] = useState([])

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

   const resetTodosHandler = () => {
      setTodos([])
   }

   const clearTodosHandler = () => {
      setTodos(todos.filter(todo => !todo.isCompleted))
   }

   const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

   return (
      <div className="App">
         <h1>Todo App</h1>
         <TodoForm addTodo={addTodoHandler}/>
         {!!todos.length
            && (<TodosAction
               completedTodosExist={!!completedTodosCount}
               resetTodos={resetTodosHandler}
               clearTodos={clearTodosHandler}
            />)
         }
         <TodoList
            todos={todos}
            deleteTasks={deleteTasksHandler}
            checkedTask={checkedTaskHandler}
         />
         {completedTodosCount > 0 && (
            <h2>
               {`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}
            </h2>
         )}
      </div>
   );
}

export default App;
