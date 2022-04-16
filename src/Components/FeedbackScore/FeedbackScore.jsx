import React from "react";

import ScorePoint from "../ScorePoint/ScorePoint";
import "./FeedbackScore.scss";

const FeedbackScore = ({ name, thirdCategory, score }) => {
  return (
    <div className="feedback_score">
      <h3>{name}</h3>

      <div className="score">
        <div className="category">
          <div className="text">
            Sets clear and realistic goals, working with others to ensure
            understanding and agreement *
          </div>

          <div className="score_point">
            <ScorePoint score={score.firstVal} />
          </div>
        </div>

        <div className="category">
          <div className="text">
            Sets clear and realistic goals, working with others to ensure
            understanding and agreement *
          </div>

          <div className="score_point">
            <ScorePoint score={score.secondVal} />
          </div>
        </div>

        {!!thirdCategory && (
          <div className="category">
            <div className="text">
              Sets clear and realistic goals, working with others to ensure
              understanding and agreement *
            </div>

            <div className="score_point">
              <ScorePoint score={score.thirdVal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackScore;
