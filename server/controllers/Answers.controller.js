import mongoose from "mongoose";
import Questions from "../models/Questions.model.js";
// export const postAnswer = async (req, res) => {
  //   const { id: _id } = req.params;
//   const { noOfAnswer, answerBody, userAnswered } = req.body;
//   const userId = req.userId;

//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send("Question not found.");
//   }

//   try {
//     const updatedQuestion = await Questions.findByIdAndUpdate(
//       _id,
//       {
//         $addToSet: {
//           answer: {
//             answerBody,
//             userAnswered,
//             userId,
//             answeredOn: new Date(),
//           },
//         },
//         $set: { noOfAnswers: noOfAnswer },
//       },
//       { new: true } 
//     );

//     if (!updatedQuestion) {
//       return res.status(404).send("Question not found.");
//     }

//     res.status(200).json(updatedQuestion);
//   } catch (error) {
//     console.error("Error posting answer:", error);
//     res.status(500).json({ message: "Error posting answer." });
//   }
// };
export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { noOfAnswer, answerBody, userAnswered } = req.body;
  const userId = req.userId;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  try {
    // updateNoOfQuestions(_id, noOfAnswer);
    // const updatedQuestion = await Questions.findByIdAndUpdate(_id, {
    //   $addToSet: { answers: [{ answerBody, userAnswered, userId }] },
    // });
    // res.status(200).json(updatedQuestion);
    const updatedQuestion = await Questions.findByIdAndUpdate(
      _id,
      {
        $addToSet: { answers: { answerBody, userAnswered, userId } },
      },
      { new: true } // Ensures updated document is returned
    );

    // Update noOfAnswers
    const noOfAnswer = updatedQuestion.answers.length;
    await updateNoOfQuestions(_id, noOfAnswer);

    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json("error in updating");
  }
};


const updateNoOfQuestions = async (_id, noOfAnswer) => {
  try {
    await Questions.findByIdAndUpdate(_id, {
      $set: { noOfAnswer: noOfAnswer },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { answerId, noOfAnswer } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable...");
  }
  if (!mongoose.Types.ObjectId.isValid(answerId)) {
    return res.status(404).send("Answer unavailable...");
  }
  updateNoOfQuestions(_id, noOfAnswer);
  try {
    await Questions.updateOne(
      { _id },
      { $pull: { answers: { _id: answerId } } }
    );
    res.status(200).json({ message: "Successfully deleted..." });
  } catch (error) {
    res.status(405).json(error);
  }
};