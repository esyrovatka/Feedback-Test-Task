import React from "react";
import "./ScorePoint.scss";

const ScorePoint = () => {
  return (
    <>
      <div className="score_point">
        <div className="point">1</div>
        <div className="point">2</div>
        <div className="point">3</div>
        <div className="point">4</div>
        <div className="point">5</div>
        <div className="point dark_point">n/a</div>
      </div>
    </>
  );
};

export default ScorePoint;
