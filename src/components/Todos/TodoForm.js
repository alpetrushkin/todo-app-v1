import React, {useState} from 'react';


const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input placeholder="Enter new todo" value={text} onChange={(event) => setText(event.currentTarget.value)}/>
            <button>Submit</button>
        </form>
    );
};

export default TodoForm;