import React from 'react';
import {Link} from 'react-router-dom';

function Column(props) {
    return (
        <Link to="/details" className="column">
            <img src={props.logo} alt={props.name + "logo"} className="image-logo" />
            <h2 className="overlay">{props.name}</h2>
        </Link>
    )
}

export default Column;