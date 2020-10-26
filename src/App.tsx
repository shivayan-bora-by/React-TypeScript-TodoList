import React, { useState } from 'react';
import NewTodo from './components/NewTodos';
import TodoList from './components/TodoList';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const todoAddHandler = (todo: string) => {
    setTodos(prevTodos => [...prevTodos, {id:Math.random().toString(), text: todo}]);
  }

  const todoDeleteHandler = (id: string) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
  }
  
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDelete={todoDeleteHandler}/>
    </div>
  );
}

export default App;
