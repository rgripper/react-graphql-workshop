import * as React from "react";
import { useRef, useState, useEffect } from "react";
import Star from "@material-ui/icons/Star";
import { getUserId } from "../../utils/userIdHelper";
import { Mutation, Query } from "react-apollo";
import { SET_RATING } from "./mutation";
import RatingStars from "../UIComponents/RatingStars";
import { GET_RATING } from "./query";

const RatingCollector: React.FC<{ movieId: string }> = ({ movieId }) => {
  const [userId, setUserId] = useState<string | undefined>(undefined);

  React.useEffect(() => {
    setUserId(getUserId()!);
  });
  
  return (
    <Query
      query={GET_RATING}
      variables={{ getRatingInput: { movieId, userId } }}
    >
      {({ data }) =>
        data.score ? (
          <div>
            <Star nativeColor="#ff9800" />
            <span> Your Rating: {data.score}</span>
          </div>
        ) : (
          <Mutation mutation={SET_RATING}>
            {(setRating: any) => {
              const onSetRating = (score: number) => {
                setRating({
                  variables: {
                    setRatingInput: {
                      movieId,
                      userId,
                      score
                    }
                  }
                });
              };
              return <RatingStars onSetRating={onSetRating} />;
            }}
          </Mutation>
        )
      }
    </Query>
  );
};

export default RatingCollector;
