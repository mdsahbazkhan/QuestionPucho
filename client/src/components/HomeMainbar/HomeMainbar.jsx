import React, { useEffect } from "react";
import "./HomeMainbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllQuestions } from "../../actions/question";
import Questionlist from "./QuestionList";
function HomeMainbar() {
  const user = useSelector((state) => state.currentUserreducer);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questionlist = useSelector((state) => state.questionsreducer.data);
  

  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);
  // console.log("questionlist:", questionlist);
  const checkauth = () => {
    if (user === null) {
      alert("Login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/Askquestion");
    }
  };
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Question</h1>
        ) : (
          <h1>All Question</h1>
        )}
        <button className="ask-btn" onClick={checkauth}>
          Ask Questions
        </button>
      </div>
      <div>
       
          {questionlist.length > 0 ? (
          <>
            <p>{questionlist.length} questions</p>
            <Questionlist questionlist={questionlist} />
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default HomeMainbar;
