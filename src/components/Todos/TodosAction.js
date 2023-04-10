import React from 'react';
import {RiRefreshLine, RiDeleteBin2Line} from "react-icons/ri";
import Button from "../UI/Button";

const TodosAction = ({resetTodos, clearTodos}) => {
   return (
      <>
         <Button title="Reset Todos" onClick={resetTodos}>
            <RiRefreshLine/>
         </Button>
         <Button title="Clear Completed Todos" onClick={clearTodos}>
            <RiDeleteBin2Line/>
         </Button>
      </>
   );
};

export default TodosAction;