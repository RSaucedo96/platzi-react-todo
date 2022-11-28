import React from 'react';
import {AppUI} from "./AppUI";

//import './App.css';

const defaultTodos=[
  {text: 'cortar cebolla', completed: false},
  {text: 'cortar morron', completed: false},
  {text: 'cortar ajo', completed: false},
];

function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);

    //simulamos un delay de conexion con el API
    React.useEffect(()=>{
        setTimeout(()=>{
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parsedItem = [];
                }else{
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch(error) {
                setError(error)
            }
        }, 1000);
    });

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName,stringifiedItem);
            setItem(newItem);
        } catch(error){
            setError(error);
        }
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

function App() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1',[]);

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

    React.useEffect(() => {
        console.log('use effect');
    }, [totalTodos]);

    return (
        <AppUI
            error = {error}
            loading={loading}
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
