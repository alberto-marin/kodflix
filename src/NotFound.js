import React from 'react';
import {Link} from 'react-router-dom';

function NotFound(){
    return(
        <section className="not-found">
            <h2>Page not found</h2>
            <p>Try going back to home. <Link to="/"> 
            Click here</Link></p>
        </section>
    )
}

export default NotFound;