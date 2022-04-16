import React, { useEffect, useState } from "react";
import "./Feedback.scss";
import logo from "../../assets/images/Frame.png";
import companyName from "../../assets/images/companyName.png";
import FeedbackScore from "../../Components/FeedbackScore/FeedbackScore";
import { useDispatch, useSelector } from "react-redux";
import { getScore } from "../../redux/selectors";
import { changeVal } from "../../redux/features/score/scoreSlice";
import { feedbackPage } from "../../constants/constants";
const FeedbackPage = () => {
  const allScore = useSelector(getScore);
  const [score, setScore] = useState(allScore);
  useEffect(() => {
    setScore(allScore);
  }, [allScore]);

  const dispatch = useDispatch();

  const changeScore = (currScore) => {
    const { Category, number, value } = currScore;
    const newScore = JSON.parse(JSON.stringify(score));
    newScore[Category][number] = value;
    setScore(newScore);
  };

  const SendClick = () => {
    dispatch(changeVal(score));
  };

  return (
    <div className="feedback_page">
      <div className="feedback_container">
        <img className="logo_img" alt="logo" src={logo} />

        <div className="company_feedback">
          <div className="company">
            <img
              className="companyName"
              alt="companyName"
              src={companyName}
              width="148px"
              height="27px"
            />

            <div>
              <h2>{feedbackPage.title}</h2>
              <p>{feedbackPage.paragraph_1}</p>
              <p>{feedbackPage.paragraph_2}</p>
            </div>

            <FeedbackScore
              name="Planning"
              score={score.Planning}
              changeScore={changeScore}
            />
            <FeedbackScore
              name="Delivering"
              thirdCategory
              score={score.Delivering}
              changeScore={changeScore}
            />
            <FeedbackScore
              name="Lorem"
              thirdCategory
              score={score.Lorem}
              changeScore={changeScore}
            />
            <div className="btn_send">
              <button className="feedback_btn" onClick={SendClick}>
                {feedbackPage.btn_1}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
