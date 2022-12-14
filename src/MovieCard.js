import React from 'react'
import MovieControl from './MovieControl';

function MovieCard({movie,type}) {
    return (
        <div className="movie-card">
          <div className="overlay"></div>
    
          {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}

        <MovieControl type={type} movie={movie}/>
       
        </div>
      );
    };
export default MovieCard
