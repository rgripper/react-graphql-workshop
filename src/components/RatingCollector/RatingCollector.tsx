// 1. use {gql} from "apollo-boost"
// 2. write query for movieUserRating, defined in query.ts
// 3. pass GraphQL query into Query component as the field of query
// 4. write your own mutation by following the formate:
/* 
mutation mutationName($variableName: type) {
 mutation content
 setRating(input: $input) {
  message
  }
} 
*/
// 5. use { Mutation } component provided by "react-apollo"
// 6. pass GraphQL mutation into Mutation component as the field of mutation
// 7. You can use your mutation within the mutation component as props

import * as React from "react";
import { useState } from "react";
import Star from "@material-ui/icons/Star";
import { getUserId } from "../../utils/userIdHelper";
import RatingStars from '../UIComponents/RatingStars';

const RatingCollector: React.FC<{ movieId: string }> = ({ movieId }) => {
  const [score, setRatingScore] = useState<number | undefined>(undefined);
  const [userId, setUserId] = useState<string | undefined>(undefined);

  React.useEffect(() => {
    setUserId(getUserId()!);
  });

  console.log(userId)

  return (
    <div>
      {score ? (
        <div>
          <Star nativeColor="#ff9800" />
          <span> Your Rating: {score}</span>
        </div>
      ) : (
        <RatingStars onSetRating={setRatingScore} />
      )}
    </div>
  );
};

export default RatingCollector;
