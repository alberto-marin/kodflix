import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import getMovies from '../../data-source/Movies-get';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      synopsis: []
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = getMovies().find(
      (movie) => movie.id === movieId
    );
    this.setState({ movie });

    axios.get(`https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=html`)
      .then(res => {
        const synopsis = res.data;
        this.setState({ synopsis });
      });
  }

  render() {
    //let movie = this.state.movie;
    if (this.state.movie === undefined) {
      return <Redirect to="/not-found" />
    } else {
      return (
        <section className="details">
          <h2>{this.state.movie.name}</h2>
          <img src={this.state.movie.logo} alt={this.state.movie.name} />
          <div dangerouslySetInnerHTML={{ __html: this.state.synopsis }}></div>
          <Link to="/">Back to home</Link>
        </section >
      )
    }

  }
}
