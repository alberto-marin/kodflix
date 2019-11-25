import React from 'react';
import Movie from '../movie/movie';
import getMovies from '../../data-source/movies-get';

function Movies() {
  return (
    <div className="movies">
      <section className="three-columns">
        {
          getMovies().map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              name={movie.name}
              logo={movie.logo}
            />
          ))
        }
      </section>
    </div>
  )
}

export default Movies;