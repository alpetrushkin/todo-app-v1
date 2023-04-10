import React from 'react';
import {RiRefreshLine, RiDeleteBin2Line} from "react-icons/ri";
import Button from "../UI/Button";
import s from './TodosActions.module.css';

const TodosAction = ({resetTodos, clearTodos, completedTodosExist}) => {
   return (
      <div className={s.todosActionsContainer}>
         <Button title="Reset Todos" onClick={resetTodos}>
            <RiRefreshLine/>
         </Button>
         <Button title="Clear Completed Todos" onClick={clearTodos} disabled={completedTodosExist}>
            <RiDeleteBin2Line/>
         </Button>
      </div>
   );
};

export default TodosAction;