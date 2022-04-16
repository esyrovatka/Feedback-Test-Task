import React from "react";
import ScorePoint from "../ScorePoint/ScorePoint";
import "./FeedbackScore.scss";
import { category } from "../../constants/constants";

const FeedbackScore = ({ name, thirdCategory, score, changeScore }) => {
  return (
    <div className="feedback_score">
      <h3>{name}</h3>

      <div className="score">
        <div className="category">
          <div className="text">{category.firstCategory}</div>

          <div className="score_point">
            <ScorePoint
              score={score.firstVal}
              category={name}
              currVal="firstVal"
              changeScore={changeScore}
            />
          </div>
        </div>

        <div className="category">
          <div className="text">{category.secondCategory}</div>

          <div className="score_point">
            <ScorePoint
              score={score.secondVal}
              category={name}
              currVal="secondVal"
              changeScore={changeScore}
            />
          </div>
        </div>

        {!!thirdCategory && (
          <div className="category">
            <div className="text">{category.thirdCategory}</div>

            <div className="score_point">
              <ScorePoint
                score={score.thirdVal}
                category={name}
                currVal="thirdVal"
                changeScore={changeScore}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackScore;
