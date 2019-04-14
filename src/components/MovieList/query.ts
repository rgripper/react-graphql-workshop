import gql from "graphql-tag";

export const GEX_MOVIES = gql`
  query GetMovies {
    movies {
      id
      title
      overview
      posterUrl
      tagline
      voteAverage
    }
  }
`;
