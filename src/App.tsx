import React from 'react';
import { useTodos } from "./useTodos";
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";

function App() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
    } = useTodos();

    return (
        <React.Fragment>
            <div className="leftWrapper">
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                {!!openModal && (
                    <Modal>
                        <TodoForm
                            addTodo={addTodo}
                            setOpenModal={setOpenModal}
                        />
                    </Modal>
                )}

                <CreateTodoButton
                    setOpenModal={setOpenModal}
                />
            </div>
            <div className="rightWrapper">
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
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

export default App;
