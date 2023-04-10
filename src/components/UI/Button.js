import React from 'react';
import s from './Button.module.css';

const Button = (props) => {
   const {children, disabled = false} = props

   return (
      <button
         {...props}
         className={s.button}
         disabled={disabled}
      >
         {children}
      </button>
   );
};

export default Button;