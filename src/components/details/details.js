import React, { useState, useEffect } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import getMovies from '../../data-source/movies-get';

function Details() {

  const [movie, setMovie] = useState({});
  const [synopsis, setSynopsis] = useState([]);
  let { movieId } = useParams();

  useEffect(() => {

    let movie = getMovies().find(
      (movie) => movie.id === movieId
    );
    setMovie(movie);

    axios.get(`https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=html`)
      .then(res => {
        const synopsis = res.data;
        setSynopsis(synopsis);
      });

  }, [movieId]);


  //let movie = this.state.movie;
  if (movie === undefined) {
    return <Redirect to="/not-found" />
  } else {
    return (
      <section className="details">
        <h2>{movie.name}</h2>
        <img src={movie.logo} alt={movie.name} />
        <div dangerouslySetInnerHTML={{ __html: synopsis }}></div>
        <Link to="/">Back to home</Link>
      </section >
    )
  }

}

export default Details;