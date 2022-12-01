import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos,loading}){

    return(
      <h2 className="TodoCounter">Completaste {completedTodos} de {totalTodos} tareas</h2>
    );
}

export { TodoCounter };