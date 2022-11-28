import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';

function AppUI({
                   loading,
                   error,
                   searchValue,
                   setSearchValue,
                   totalTodos,
                   completedTodos,
                   searchedTodos,
                   completeTodo,
                   deleteTodo,
               }) {
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
                    {error && <p>Hubo un error</p>}
                    {loading && <p>cargando</p>}
                    {(!loading && !searchedTodos.length) && <p>crea tu primer todo</p>}
                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
            </div>
        </React.Fragment>
    );
}

export { AppUI };