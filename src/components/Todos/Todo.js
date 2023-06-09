import React from 'react';
import {RiTodoFill, RiDeleteBin2Line} from "react-icons/ri";
import {FaCheck} from "react-icons/fa";
import s from './Todo.module.css';

const Todo = ({todo, deleteTask, checkedTask}) => {
   return (
      <div className={`${s.todo} ${todo.isCompleted ? s.completedTodo : ''}`} onDoubleClick={() => deleteTask(todo.id)}>
         <RiTodoFill className={s.todoIcon}/>
         <div className={s.todoText}>{todo.title}</div>
         <RiDeleteBin2Line className={s.deleteIcon} onClick={() => deleteTask(todo.id)}/>
         <FaCheck className={s.checkIcon} onClick={() => checkedTask(todo.id)}/>
      </div>
   )
};

export default Todo;