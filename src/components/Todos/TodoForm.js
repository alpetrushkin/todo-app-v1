import React, {useState} from 'react';
import s from './TodoForm.module.css';

const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <div className={s.todoFormBox}>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder="Enter new todo"
                    value={text}
                    onChange={(event) => setText(event.currentTarget.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default TodoForm;