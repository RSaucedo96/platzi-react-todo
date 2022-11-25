import React from 'react';

function TodoItem(props){
    return(
        <li>
            <p>
                {props.text}
            </p>
        </li>
    );
}

export { TodoItem };