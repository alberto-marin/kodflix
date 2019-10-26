import React from 'react';

function Column(props) {
    return (
        <div className="column">
            <img src={props.logo} alt={props.name + "logo"} className="image-logo" />
            <h2 className="overlay">{props.name}</h2>
        </div>
    )
}

export default Column;