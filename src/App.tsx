import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
//import './App.css';

const todos=[
  {text: 'cortar cebolla', completed: false},
  {text: 'cortar morron', completed: false},
  {text: 'cortar ajo', completed: false},
];

function App() {
  return (
    <React.Fragment>
        <div className="leftWrapper">
            <TodoSearch />
            <CreateTodoButton />
        </div>
        <div className="rightWrapper">
            <TodoCounter />
            <TodoList>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </TodoList>
        </div>
    </React.Fragment>
  );
}

export default App;
