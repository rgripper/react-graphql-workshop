import * as React from "react";
import { match } from "react-router-dom";
// import sampleMovies from "../../data/sampleMovies";
import BackToHome from "../UIComponents/BackToHome";
import MoviePage from "./MoviePage";
import { Query } from "react-apollo";
import { GET_MOVIE } from "./query";

interface MovieParams {
  id: string;
}

interface MovieProps {
  required: string;
  match?: match<MovieParams>;
}

const Movie: React.SFC<MovieProps> = ({ match }) => (
  <>
    <BackToHome />
    <Query query={GET_MOVIE} variables={{ id: "101299" }}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) {
          console.log(error);
          return <div>Error :(</div>;
        }

        return <MoviePage movie={data.movie} />;
      }}
    </Query>
  </>
);

export default Movie;
