import React from 'react';
import Todo from "./Todo";
import s from './TodoList.module.css';

const TodoList = ({todos}) => {
    let todosMap = todos.map((todo, index) => <Todo key={index} todo={todo}/>)

    return (
        <div className={s.todoListBox}>
            {!todos.length ? <h2>Todo list is empty</h2> : todosMap}
        </div>
    )
};

export default TodoList;