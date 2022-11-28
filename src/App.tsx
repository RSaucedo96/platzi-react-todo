import React from 'react';
import {AppUI} from "./AppUI";

//import './App.css';

const defaultTodos=[
  {text: 'cortar cebolla', completed: false},
  {text: 'cortar morron', completed: false},
  {text: 'cortar ajo', completed: false},
];

function App() {
    const localStorageTodos = localStorage.getItem('TODOS_V1')
    let parsedTodos;

    if (!localStorageTodos) {
        localStorage.setItem('TODOS_V1',JSON.stringify([]));
        parsedTodos = [];
    }else{
        parsedTodos = JSON.parse(localStorageTodos);
    }


    //array de TODOs
    const [todos, setTodos] = React.useState(parsedTodos);
    const [searchValue, setSearchValue] = React.useState('');

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

    const saveTodos = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem('TODOS_V1',stringifiedTodos);
        setTodos(newTodos);
    };

    //marcamos la propiedad completed como true y actualizamos
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        setTodos(newTodos);
    };

    return (
        <AppUI
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    );
}

export default App;
