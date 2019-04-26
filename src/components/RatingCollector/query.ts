import gql from 'graphql-tag';

export const GET_RATING = gql`
  query GetRating($getRatingInput: GetRatingInput!) {
    movieUserRating(getRatingInput: $getRatingInput) {
      score
    }
  }
`;
