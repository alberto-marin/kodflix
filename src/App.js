import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import javascriptLogo from './assets/img/javascriptLogo.svg';
import './App.css';
import Technologies from './Technologies';
import Details from './Details';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={javascriptLogo} className="App-logo" alt="logo" />
        <h1>Welcome to Kodflix</h1>
      </header>
      <main>
        <Route exact path="/" component={Technologies} />
        <Route exact path="/details" component={Details} />
      </main>
      <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
