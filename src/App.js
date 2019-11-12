import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import kodflixLogo from './assets/img/kodflix.png';
import './App.css';
import Movies from './components/Movies';
import Details from './components/details/Details';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={kodflixLogo} className="App-logo" alt="logo" />
          <h1>Welcome to Kodflix</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/:movieId" component={Details} />
          </Switch>
        </main>
        <footer>
          <p>Alberto Marin 2019</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
