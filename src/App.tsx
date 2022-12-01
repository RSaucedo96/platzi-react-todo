import React from 'react';
import {useTodos} from "./useTodos";
import {TodoCounter} from './components/TodoCounter';
import {TodoItem} from './components/TodoItem';
import {TodoList} from './components/TodoList';
import {TodoSearch} from './components/TodoSearch';
import {TodosLoading} from "./components/TodosLoading";
import {TodosError} from "./components/TodosError";
import {EmptyTodos} from "./components/EmptyTodos";
import {CreateTodoButton} from './components/CreateTodoButton';
import {Modal} from "./components/Modal";
import {TodoForm} from "./components/TodoForm";

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
                <TodoList
                    loading={loading}
                    error={error}
                    searchedTodos={searchedTodos}
                    searchText={searchValue}
                    totalTodos={totalTodos}
                    onError={() => <TodosError/>}
                    onLoading={() => <TodosLoading/>}
                    onEmptyTodos={() => <EmptyTodos/>}
                    onEmptySearchResults={
                        (searchText) => <p>no hay resultados para {searchText}</p>
                    }
                    {todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    )}
                />
            </div>
        </React.Fragment>
    );
}

export default App;
