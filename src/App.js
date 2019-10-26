import React from 'react';
import javascriptLogo from './javascriptLogo.svg';
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
            <h2>ReactJs</h2>
          </div>
          <div className="column">
            <h2>HTML5</h2>
          </div>
          <div className="column">
            <h2>CSS3</h2>
          </div>
        </section>
        <section className="three-columns">
          <div className="column">
            <h2>Node.js</h2>
          </div>
          <div className="column">
            <h2>Mongodb</h2>
          </div>
          <div className="column">
            <h2>Heroku</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
