import React from 'react';
import s from './Todo.module.css';

const Todo = ({ todo }) => {
    return (
        <div className={s.todoBox}>
            <h3>{todo}</h3>
        </div>
    )
};

export default Todo;