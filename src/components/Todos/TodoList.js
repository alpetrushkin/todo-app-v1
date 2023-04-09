import React from 'react';
import Todo from "./Todo";
import s from './TodoList.module.css';

const TodoList = ({todos, deleteTasks}) => {
    let todosMap = todos.map(todo =>
        <Todo
            key={todo.id}
            todo={todo}
            deleteTask={deleteTasks}
        />)

    return (
        <div className={s.todoListBox}>
            {!todos.length ? <h2>Todo list is empty</h2> : todosMap}
        </div>
    )
};

export default TodoList;