import { gql } from "apollo-boost";

export const GET_MOVIE = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      id
      title
      keywords {
        id
        name
      }
      overview
      posterUrl
      posterPath
      tagline
      voteAverage
      releaseDate
      genres
      runtime
      revenue
      language
      imdbId
    }
  }
`;
