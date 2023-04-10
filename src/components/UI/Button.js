import React from 'react';
import s from './Button.module.css';

const Button = ({onClick, children, title, disabled = false}) => {
   return (
      <button
         className={s.button}
         title={title}
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </button>
   );
};

export default Button;