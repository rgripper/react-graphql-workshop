import * as React from "react";
import Rating from "./Rating";
import Revenue from "./Revenue";
import { Movie } from "../type/Movie";
import ImageHeader from "./ImageHeader";
import Detail from "./Detail";
import Keywords from "./Keywords";
import Genres from "./Genres";
import { getImageUrl } from "../utils/imagePathHelper";

interface MoviePageProps {
  movie: Movie;
}

const MoviePage: React.SFC<MoviePageProps> = ({ movie }) => {
  return (
    <article className="movie-container">
      <ImageHeader imagePath={movie.posterPath} />

      <div className="movie">
        <div className="image-container">
          <img src={getImageUrl(movie.posterPath, "main")} />
        </div>

        <div className="content">
          <div className="content-top">
            <div className="title">
              {movie.title}
              <span className="date">{movie.releaseDate}</span>
            </div>

            <Rating rating={movie.voteAverage} size="large" />

            <Detail heading="Overview" detail={movie.overview} />

            <Genres genres={movie.genres} />
          </div>

          <div className="content-bottom">
            <Detail heading="Tagline" detail={`"${movie.tagline}"`} />

            <Detail heading="Movie length" detail={`${movie.runtime} mins`} />

            <Revenue revenue={movie.revenue} />

            <Keywords keywords={movie.keywords} />

            <Detail heading="Language" detail={movie.language} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default MoviePage;
