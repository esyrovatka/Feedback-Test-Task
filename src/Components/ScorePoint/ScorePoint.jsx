import React, { useEffect, useState } from "react";
import "./ScorePoint.scss";

const ScorePoint = ({ score, category, currVal, changeScore }) => {
  const [currScore, setCurrScore] = useState({
    Category: category,
    number: currVal,
    value: score,
  });

  const arr = [1, 2, 3, 4, 5];

  const handleClick = (i) => () => {
    setCurrScore({ ...currScore, value: i });
  };

  useEffect(() => {
    changeScore(currScore);
  }, [currScore, changeScore]);

  return (
    <>
      <div className="score_point">
        {arr.map((item, index) => (
          <div
            className={index === currScore.value - 1 ? "active_point" : `point`}
            onClick={handleClick(item)}
            key={item}
          >
            {item}
          </div>
        ))}
        <div
          className={currScore.value === null ? "active_point" : `dark_point `}
          onClick={handleClick(null)}
        >
          n/a
        </div>
      </div>
    </>
  );
};

export default ScorePoint;
