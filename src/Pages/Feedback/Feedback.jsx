import React from "react";
import "./Feedback.scss";
import logo from "../../images/Frame.png";
import companyName from "../../images/companyName.png";
import FeedbackScore from "../../Components/FeedbackScore/FeedbackScore";
import { useSelector } from "react-redux";
import { getScore } from "../../redux/selectors";
const FeedbackPage = () => {
  const score = useSelector(getScore);
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
              <h2>Feedback for Aglieglie Brazof</h2>

              <p>
                Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
                Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
                Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
                Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
                Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
                Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
                Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
                Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
                Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
                Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem.
              </p>
              <p>
                Thank you for your contribution to this very important process.
              </p>
            </div>

            <FeedbackScore name="Planning" score={score.Planning} />
            <FeedbackScore
              name="Delivering"
              thirdCategory
              score={score.Delivering}
            />
            <FeedbackScore name="Lorem" thirdCategory score={score.Lorem} />
            <div className="btn_send">
              <button className="feedback_btn">Send Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
