import React from 'react';
import {RiRefreshLine, RiDeleteBin2Line} from "react-icons/ri";
import Button from "../UI/Button";

const TodosAction = () => {
   return (
      <>
         <Button title="Reset Todos">
            <RiRefreshLine/>
         </Button>
         <Button title="Clear Completed Todos">
            <RiDeleteBin2Line/>
         </Button>
      </>
   );
};

export default TodosAction;