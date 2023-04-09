import React from 'react';
import { RiTodoFill } from "react-icons/ri";
import s from './Todo.module.css';

const Todo = ({todo, removeTodo, todoId}) => {
    const onDoubleClickHandler = () => {
        removeTodo(todoId)
    }

    return (
        <div className={s.todoBox} onDoubleClick={onDoubleClickHandler}>
            <RiTodoFill className={s.todoIcons}/>
            <h3>{todo}</h3>
        </div>
    )
};

export default Todo;