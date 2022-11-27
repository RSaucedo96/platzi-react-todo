import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
//import './App.css';

const defaultTodos=[
  {text: 'cortar cebolla', completed: false},
  {text: 'cortar morron', completed: false},
  {text: 'cortar ajo', completed: false},
];

function App() {
    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    return (
        <React.Fragment>
            <div className="leftWrapper">
                <TodoSearch
                    searchValue = {searchValue}
                    setSearchValue = {setSearchValue}
                />
                <CreateTodoButton />
            </div>
            <div className="rightWrapper">
                <TodoCounter
                    total={totalTodos}
                    completed={completedTodos}
                />
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
