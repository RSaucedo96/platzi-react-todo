import React from 'react';
import {TodoContext} from "./components/TodoContext";
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from "./components/Modal";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <div className="leftWrapper">
                <TodoSearch/>
                {!!openModal && (
                    <Modal>
                        <p>{searchedTodos[0]?.text}</p>
                    </Modal>
                )}

                <CreateTodoButton
                    setOpenModal={setOpenModal}
                />
            </div>
            <div className="rightWrapper">
                <TodoCounter/>
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