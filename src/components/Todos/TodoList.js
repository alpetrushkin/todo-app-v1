import React from 'react';
import Todo from "./Todo";
import s from './TodoList.module.css';

const TodoList = ({ todos }) => {
    return (
        <div className={s.todoListBox}>
            {todos.map((todo, index) => <Todo key={index} todo={todo}/>)}
        </div>

    )
};

export default TodoList;