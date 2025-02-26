import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema({
  questionTitle: {
    type: String,
    required: true,
  },
  questionBody: {
    type: String,
    required: "Question must have a body",
  },
  questionTags: {
    type:[String],
    required: "Question must have a tags",
  },
  noOfAnswer: {
    type: Number,
    default: 0,
  },
  upVote: {
    type: [String],
    default: [],
  },
  downVote: {
    type: [String],
    default: [],
  },
  userPosted: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: "Question must have a author",
  },
  userId: {
    type: String,
  },
  askedOn: {
    type: Date,
    default: Date.now(),
  },
  answers: [
    {
      answerBody: String,
      userAnswered: String,
      answeredOn: { type: Date, default: Date.now},
      userId: String,
    },
  ],
});
export default mongoose.model("Question", QuestionSchema);
