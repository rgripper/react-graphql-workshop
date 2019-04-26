import gql from 'graphql-tag';

export const SET_RATING = gql`
  mutation SetRating($setRatingInput: SetRatingInput!) {
    setRating(setRatingInput: $setRatingInput) {
      message
    }
  }
`;
