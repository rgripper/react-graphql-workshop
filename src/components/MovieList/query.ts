import { gql } from "apollo-boost";

export const GET_MOVIES = gql`
  query getMovies {
    movies {
      title
      id
    }
  }
`;
