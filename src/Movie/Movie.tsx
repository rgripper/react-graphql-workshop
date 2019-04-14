import * as React from "react";
import { match } from "react-router-dom";
import sampleMovies from "../data/sampleMovies";
import BackToHome from '../UIComponents/BackToHome';
import MoviePage from '../UIComponents/MoviePage';

interface MovieParams {
  id: string;
}

interface MovieProps {
  required: string;
  match?: match<MovieParams>;
}

const Movie: React.SFC<MovieProps> = ({ match }) => {
  const movie = sampleMovies.find(m =>
    match ? m.id.toString() === match.params.id : false
  );

  return (
    <>
      <BackToHome />

      {movie && <MoviePage movie={movie} />}
    </>
  );
};

export default Movie;
