import React from 'react';
import { RiTodoFill } from "react-icons/ri";
import s from './Todo.module.css';

const Todo = ({todo, deleteTask}) => {
    return (
        <div className={s.todoBox} onDoubleClick={() => deleteTask(todo.id)}>
            <RiTodoFill className={s.todoIcons}/>
            <h3>{todo.title}</h3>
        </div>
    )
};

export default Todo;