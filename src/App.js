import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/style.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import Details from './components/Details/Details';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/:movieId" component={Details} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
