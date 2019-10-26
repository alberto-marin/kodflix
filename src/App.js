import React from 'react';
import javascriptLogo from './assets/img/javascriptLogo.svg';
import css3Image from './assets/img/css-3.svg';
import databaseImage from './assets/img/database.svg';
import herokuImage from './assets/img/heroku.svg';
import html5Image from './assets/img/html5.svg';
import nodejsImage from './assets/img/nodejs.svg';
import reactImage from './assets/img/react.svg';
import Column from './Column';
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
          <Column name="ReactJs" logo={reactImage} />
          <Column name="HTML5" logo={html5Image} />
          <Column name="CSS3" logo={css3Image} />
        </section>
        <section className="three-columns">
          <Column name="Node.js" logo={nodejsImage} />
          <Column name="MongoDB" logo={databaseImage} />
          <Column name="Heroku" logo={herokuImage} />
        </section>
      </main>
      <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  );
}

export default App;
