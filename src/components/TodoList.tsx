import React from 'react';
import './TodoList.css'

interface Props {
    items: {id: string, text: string}[];
    onDelete: (id:string) => void;
}

// FC is a Generic type where we can define all the extra props besides the default prop of children which every component has which we can expect here
const TodoList: React.FC<Props> = ({items, onDelete}) => {
    const handleTodoDelete = (id: string) => {
        onDelete(id);
    }

    return <ul>
        {items.map((todo) => {
            return <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
            </li>
        })}
    </ul>;
};

export default TodoList;
