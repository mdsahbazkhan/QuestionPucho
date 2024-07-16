
import React from "react";
import "./Auth.css";
import logo from "../../assets/logo.png";
import Qlogo from "../../assets/question.png";
import tag from "../../assets/tag.png";
import reward from "../../assets/reward.png";

function AboutAuth() {
  return (
    <div className='auth-container-1 '>
      <img src={logo} alt="logo" style={{width:"250px",height:"45px",right:"25px"}} />
      <div className='inner'>
        <img src={Qlogo} alt="question-logo" />
        <p>Get unstuck - ask a question</p>
      </div>
      <div className='inner'>
        <img src={tag} alt="tag" />
        <p>Save your favorite posts, tag and filters</p>
      </div>
      <div className='inner'>
        <img src={reward} alt="reward" />
        <p>Answer questions and earn reputation</p>
      </div>
      <p>Collaborate and share knowledge with a private group for FREE. <br />
        <span style={{ color: "#1B75D0" }}>Get QuestionPucho for Teams free for up to 50 users.</span>
      </p>
    </div>
  );
}

export default AboutAuth;

