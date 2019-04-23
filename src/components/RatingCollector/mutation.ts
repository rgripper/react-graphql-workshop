import gql from 'graphql-tag';

export const SET_RATING = gql`
  mutation SetRating($input: SetRatingInput!) {
    setRating(input: $input) {
      message
    }
  }
`;
