import * as React from "react";
import sampleMovies from "../data/sampleMovies";
import MovieCard from "../UIComponents/MovieCard";

const MovieList = () => {
  return (
    <div className="movie-list">
      {sampleMovies.map(movie => (
        <MovieCard
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          posterUrl={movie.posterUrl}
          tagline={movie.tagline}
          voteAverage={movie.voteAverage}
        />
      ))}
    </div>
  );
};

export default MovieList;
