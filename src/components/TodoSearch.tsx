import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange = (event) => {
          setSearchValue(event.target.value);
    };

    return(
        <input
            className="TodoSearch"
            placeholder="escribe una tarea"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };