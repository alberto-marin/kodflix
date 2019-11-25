import React from 'react';
import kodflixLogo from '../../data-source/assets/img/kodflix.png';

function Header() {
    return (
        <header className="App-header">
            <img src={kodflixLogo} className="App-logo" alt="logo" />
            <h1>Welcome to Kodflix</h1>
        </header>
    )
}

export default Header;