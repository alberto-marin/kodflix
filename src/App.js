import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/style.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Movies from './components/movies/movies';
import Details from './components/details/details';
import NotFound from './components/notFound/notFound';

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
