import React from 'react';
import javascriptLogo from './assets/img/javascriptLogo.svg';
import './App.css';
import Technologies from './Technologies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={javascriptLogo} className="App-logo" alt="logo" />
        <h1>Welcome to Kodflix</h1>
      </header>
      <main>
        <Technologies />
      </main>
      <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  );
}

export default App;
