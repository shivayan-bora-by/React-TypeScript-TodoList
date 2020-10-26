import React, {useRef} from 'react';
import './NewTodos.css'

interface Props {
    onAddTodo: (todo: string) => void;
}

const NewTodo:React.FC<Props> = ({onAddTodo}) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        // Even though we have coded it ourself, typescript gives a warning that this will be null. In order to make sure that TS recognizes that, it won't happen, we need to put an '!' mark here as shown.
        const enteredText = textInputRef.current!.value;
        onAddTodo(enteredText);
        textInputRef.current!.value = '';
    };
    return <form onSubmit={todoSubmitHandler}>
        <div className='form-control'>
            <label htmlFor='todo-text'>Todo Text: </label>
            <input type='text' id='todo-text' ref={textInputRef}/>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
}

export default NewTodo;