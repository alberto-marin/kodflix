import React from 'react';
import javascriptLogo from './assets/img/javascriptLogo.svg';
import css3Image from './assets/img/css-3.svg';
import databaseImage from './assets/img/database.svg';
import herokuImage from './assets/img/heroku.svg';
import html5Image from './assets/img/html5.svg';
import nodejsImage from './assets/img/nodejs.svg';
import reactImage from './assets/img/react.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={javascriptLogo} className="App-logo" alt="logo" />
        <h1>Welcome to Kodflix</h1>
      </header>
      <main>
        <section className="three-columns">
          <div className="column">
            <img src={reactImage} alt="react logo" className="image-logo" />
            <h2 className="overlay">ReactJs</h2>
          </div>
          <div className="column">
            <img src={html5Image} alt="html5 logo" className="image-logo" />
            <h2 className="overlay">HTML5</h2>
          </div>
          <div className="column">
            <img src={css3Image} alt="css3 logo" className="image-logo" />
            <h2 className="overlay">CSS3</h2>
          </div>
        </section>
        <section className="three-columns">
          <div className="column">
            <img src={nodejsImage} alt="nodejs logo" className="image-logo" />
            <h2 className="overlay">Node.js</h2>
          </div>
          <div className="column">
            <img src={databaseImage} alt="database logo" className="image-logo" />
            <h2 className="overlay">MongoDB</h2>
          </div>
          <div className="column">
            <img src={herokuImage} alt="heroku logo" className="image-logo" />
            <h2 className="overlay">Heroku</h2>
          </div>
        </section>
      </main>
      <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  );
}

export default App;
