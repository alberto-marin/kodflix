import React from 'react';
import { Link } from 'react-router-dom';

// object destructuring

function Movie({ id, logo, name }) {
    return (
        <Link to={"/" + id} className="column">
            <img src={logo} alt={name + "logo"} className="image-logo" />
            <h2 className="overlay">{name}</h2>
        </Link>
    )
}

export default Movie;