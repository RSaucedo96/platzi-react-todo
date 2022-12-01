import React from 'react';
import {useLocalStorage} from "./useLocalStorage";

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    //TODOs completos
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    //Filtramos los TODOs para que aparezcan los buscados
    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    //marcamos la propiedad completed como true y actualizamos
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        });
        saveTodos(newTodos);
        console.log(`${newTodos} guardado!`)
    };

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return ({
        error,
        loading,
        searchValue,
        setSearchValue,
        totalTodos,
        completedTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
        sincronizeTodos,
    });
}

export {useTodos};