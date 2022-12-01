import React from 'react';
import './TodoList.css'

function TodoList(props){
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.lenght) && props.onEmptySearchResults(props.searchText)}
            {props.searchedTodos.map(props.children)}
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };