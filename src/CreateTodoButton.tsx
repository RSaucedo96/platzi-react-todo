import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton = (msg) =>{
        alert(msg);
    };
    return(
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton('el mensaje q le asignamos a msg')}
        >
            +
        </button>
    );
}

export { CreateTodoButton };