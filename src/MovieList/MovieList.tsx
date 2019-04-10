import * as React from "react";
import { Link } from "react-router-dom";
import sampleMovies from "../data/sampleMovies";
import StarIcon from "@material-ui/icons/Star";

const MovieList = () => {
  return (
    <div className="movie-list">
      {sampleMovies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`} className="list-item">
          <div className="image-container">
            <img src={movie.posterUrl} />
          </div>
          <div className="content">
            <div className="title">{movie.title}</div>

            <div className="detail">"{movie.tagline}"</div>

            <div className="heading">Overview</div>
            <div className="detail">{movie.overview.slice(0, 100)}...</div>

            <div className="rating">
              <StarIcon nativeColor="#ff9800" />
              {movie.voteAverage}/10
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
