import React, { useState } from "react";
import "./ScorePoint.scss";

const ScorePoint = ({ score }) => {
  const [currScore, setCurrScore] = useState(score);

  const arr = ["1", "2", "3", "4", "5"];

  const handleClick = (i) => () => {
    setCurrScore(i);
  };
  return (
    <>
      <div className="score_point">
        {arr.map((item, index) => (
          <div
            className={index === currScore - 1 ? "active_point" : `point`}
            onClick={handleClick(item)}
            key={item}
          >
            {item}
          </div>
        ))}
        <div className="point dark_point">n/a</div>
      </div>
    </>
  );
};

export default ScorePoint;
