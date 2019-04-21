import * as React from "react";
import { useRef, useState, useEffect } from "react";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import { getUserId } from "../../utils/userIdHelper";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SET_RATING = gql`
  mutation SetRating($input: SetRatingInput!) {
    setRating(input: $input) {
      message
    }
  }
`;

const RatingCollector: React.SFC<{ movieId: string }> = ({ movieId }) => {
  const { ref: hoverRef, value: hoverIndex } = useStarHover();
  const [score, setRatingScore] = useState<number | undefined>(undefined);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const stars = Array.from(Array(10).keys());

  React.useEffect(() => {
    setUserId(getUserId()!);
  });

  return (
    <div ref={hoverRef} className="rating-collector">
      {score ? (
        <>
          <Star nativeColor="#ff9800" />
          <span> Your Rating: {score}</span>
        </>
      ) : (
        <Mutation mutation={SET_RATING}>
          {(setRating: any) =>
            stars.map((star, i) => (
              <span key={star} data-sequence={i + 1}>
                {i < hoverIndex ? (
                  <Star
                    nativeColor="#ff9800"
                    onClick={() => {
                      setRatingScore(i + 1);
                      setRating({
                        variables: {
                          input: {
                            movieId,
                            userId,
                            score: i + 1
                          }
                        }
                      });
                    }}
                  />
                ) : (
                  <StarBorder nativeColor="#ff9800" />
                )}
              </span>
            ))
          }
        </Mutation>
      )}
    </div>
  );
};

export default RatingCollector;

// Hook
function useStarHover() {
  const [value, setValue] = useState<number>(0);

  const ref: React.RefObject<HTMLDivElement> = useRef(null);

  const handleMouseOver = (sequence: number) => setValue(sequence);
  const handleMouseOut = () => setValue(0);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      const starIcons = node.querySelectorAll("span");
      const starIconsElements = Array.from(starIcons) as HTMLElement[];
      starIconsElements.forEach(starIcon => {
        starIcon.addEventListener("mouseover", e =>
          // @ts-ignore
          handleMouseOver(Number(e.currentTarget.getAttribute("data-sequence")))
        );
        node.addEventListener("mouseout", handleMouseOut);
      });

      return () => {
        starIconsElements.forEach(starIcon => {
          starIcon.removeEventListener("mouseover", () => handleMouseOver(0));
          starIcon.removeEventListener("mouseout", handleMouseOut);
        });
      };
    }
    return;
  }); // Recall only if ref changes

  return { ref, value };
}
