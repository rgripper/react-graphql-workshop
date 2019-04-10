import * as React from "react";
import { match, Link } from "react-router-dom";
import MovieIcon from "@material-ui/icons/MovieOutlined";
import sampleMovies from "../data/sampleMovies";
import StarIcon from "@material-ui/icons/Star";

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

  const getRevenue = (rawRevenue: number) =>
    rawRevenue / 1000000000 > 1
      ? `$ ${(rawRevenue / 1000000000).toFixed(2)} Billion`
      : `$ ${(rawRevenue / 1000000).toFixed(2)} Million`;

  return (
    <>
      <div className="home">
        <Link to="/">
          <MovieIcon /> Back to all Movies
        </Link>
      </div>

      {movie && (
        <div className="movie-container">
          <div className="image-head">
            <img
              src={`https://image.tmdb.org/t/p/w1400_and_h450_face${
                movie.posterPath
              }`}
            />
          </div>
          <div className="movie">
            <div className="image-container">
              <img src={`https://image.tmdb.org/t/p/w342${movie.posterPath}`} />
            </div>

            <div className="content">
              <div className="content-top">
                <div className="title">
                  {movie.title}
                  <span className="date">{movie.releaseDate}</span>
                </div>

                <div className="rating">
                  <StarIcon nativeColor="#ff9800" fontSize="large" />
                  {movie.voteAverage}/10
                </div>

                <div className="heading">Overview</div>
                <div className="detail">{movie.overview}</div>

                <div className="heading">Genres</div>
                <div className="genres">
                  {movie.genres.map(g => (
                    <span key={g}>{g}</span>
                  ))}
                </div>
              </div>

              <div className="content-bottom">
                <div className="heading">Tagline</div>
                <div className="detail">"{movie.tagline}"</div>

                <div className="heading">Movie length</div>
                <div className="detail">{movie.runtime} mins</div>

                <div className="heading">Revenue</div>
                <div className="detail">{getRevenue(movie.revenue)}</div>

                <div className="heading">Keywords</div>
                <div className="keywords">
                  {movie.keywords.map(k => (
                    <span key={k.id}>{k.name}</span>
                  ))}
                </div>

                <div className="heading">Language</div>
                <div className="detail">{movie.language}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
