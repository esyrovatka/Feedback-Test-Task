import React from "react";
import ScorePoint from "../ScorePoint/ScorePoint";
import "./FeedbackScore.scss";

const FeedbackScore = ({ name }) => {
  return (
    <div className="feedback_score">
      <h3>{name}</h3>

      <div className="score">
        <div className="firstCategory">
          <div className="text">
            Sets clear and realistic goals, working with others to ensure
            understanding and agreement *
          </div>

          <div className="score_point">
            <ScorePoint />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackScore;
