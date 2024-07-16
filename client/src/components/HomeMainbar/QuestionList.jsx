import React from "react";
import Question from "./Questions";
function Questionlist({ questionlist }) {
  // console.log("Rendering Questionlist with:", questionlist);
  return (
    <div>
      {questionlist && questionlist.length > 0 ? (
        questionlist.map((question) => (
          <Question question={question} key={question._id} />
        ))
      ) : (
        <h2>No questions available</h2>
      )}
    </div>
  );
}

export default Questionlist;
