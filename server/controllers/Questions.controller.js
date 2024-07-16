import Question from "../models/Questions.model.js";
import mongoose from "mongoose";

export const AskQuestion = async (req, res) => {
  const postquestiondata = req.body;
  // console.log("postquestiondata", postquestiondata);
  const userId = req.userId;
  // console.log("userId from auth middleware:", userId);
  const postQuestion = new Question({
    ...postquestiondata,
    userPosted: userId,
  });
  // console.log(postQuestion);

  try {
    const savedQuestion = await postQuestion.save();
    res
      .status(201)
      .json({
        message: "Posted a question successfully",
        question: savedQuestion,
      });
  } catch (error) {
    console.error("Error posting question:", error);
    res
      .status(500)
      .json({
        message: "Couldn't post a new question. Please try again later.",
      });
  }
};
export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await Question.find().sort({ askedOn: -1 });
    // console.log(questionList)
    return res.status(200).json(questionList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  try {
    await Question.findByIdAndDelete(_id);
    res.status(200).json({ message: "successfully deleted..." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const { value } = req.body;
  const userId = req.userId;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  try {
    const question = await Question.findById(_id);
    const upIndex = question.upVote.findIndex((id) => id === String(userId));
    const downIndex = question.downVote.findIndex(
      (id) => id === String(userId)
    );

    if (value === "upVote") {
      if (downIndex !== -1) {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
      if (upIndex === -1) {
        question.upVote.push(userId);
      } else {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
    } else if (value === "downVote") {
      if (upIndex !== -1) {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
      if (downIndex === -1) {
        question.downVote.push(userId);
      } else {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
    }
    await Question.findByIdAndUpdate(_id, question);
    res.status(200).json({ message: "voted successfully..." });
  } catch (error) {
    res.status(404).json({ message: "id not found" });
  }
};
// export const getQuestionById = async (req, res) => {
//   const { id } = req.params;
//   console.log(getQuestionById)
//   try {
//     const question = await Question.findById(id).populate('userPosted', 'name');
//     if (!question) {
//       return res.status(404).json({ message: "Question not found" });
//     }
//     res.status(200).json(question);
//   } catch (error) {
//     console.error("Error fetching question:", error);
//     res.status(500).json({ message: "Error fetching question" });
//   }
// };
