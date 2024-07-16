import * as api from "../api/index";

export const askquestion = (questionData, navigate) => async (dispatch) => {
  try {
    const data = await api.postQuestion(questionData);
    // console.log("hi",data);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.log("Error asking question:",error);
  }
};

export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const  data  = await api.getAllQuestions();
    // console.log("data",data);
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
    
  } catch (error) {
    console.log("Error fetching questions:",error);
  }
};



export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    await api.deleteQuestion(id);
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const voteQuestion = (id, value) => async (dispatch) => {
  try {
    await api.voteQuestion(id, value);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswer, answerBody, userAnswered } = answerData;
    const data  = await api.postAnswer(
      
      id,
      noOfAnswer,
      answerBody,
      userAnswered
    );
   
    
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllQuestions());
    // console.log("Answer posted successfully:", data); 
    // alert("Your answer has been posted successfully!");
    
  } catch (error) {
    console.log(error);
    alert("Failed to post answer. Please try again later.");
  }
};

export const deleteAnswer = (id, answerId, noOfAnswer) => async (dispatch) => {
  try {
    await api.deleteAnswer(id, answerId, noOfAnswer);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};