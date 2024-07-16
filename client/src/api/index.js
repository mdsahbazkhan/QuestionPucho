

import axios from "axios";

const API = axios.create({
  baseURL: "https://questionpucho.onrender.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const logIn = (authData) => API.post("/users/login", authData);
export const signUp = (authData) => API.post("/users/signup", authData);

// export const postQuestion = (questionData) =>
//   API.post("/questions/ask", questionData);
export const postQuestion = async (questionData) =>{
    try {
      const response = await API.post("/questions/ask", questionData);
      // console.log(response.data);
       return response.data;
     
    } catch (error) {
       console.error("Post Question Error:", error.response? error.response.data : error.message);
       throw error;
     }
   }
//    await API.post("questions/ask", questionData);

// export const getAllQuestions = () => API.get("/questions/get");


export const getAllQuestions = async () => {
  try {
    const response = await API.get("/questions/get");
    // console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error("Get All Questions Error:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteQuestion = async (id) => {
  try {
    const response = await API.delete(`/questions/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Delete Questions Error:", error.response ? error.response.data : error.message);
    throw error;
  }
} 
export const voteQuestion = (id, value) =>
  API.patch(`/questions/vote/${id}`, { value });

// export const postAnswer = (id, noOfAnswer, answerBody, userAnswered) =>
//   API.patch(`/answer/post/${id}`, { noOfAnswer, answerBody, userAnswered });
export const postAnswer = async (id, noOfAnswer, answerBody, userAnswered) => {
  try {
    const response = await API.patch(`/answers/post/${id}`, {
      noOfAnswer,
      answerBody,
      userAnswered,
    });
    return response.data; 
  } catch (error) {
    throw error; 
    
  }
};
export const deleteAnswer = (id, answerId, noOfAnswer) =>
  API.patch(`/answers/delete/${id}`, { answerId, noOfAnswer });

export const getAllUsers = async () => {
  try {
    const response = await API.get("/users/getAllUsers");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
export const updateProfile = (id, updateData) =>
  API.patch(`/users/update/${id}`, updateData);