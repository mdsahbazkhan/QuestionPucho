import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from './routes/users.js'
import questionRoutes from "./routes/Questions.js"
// import connectDB from "./connectMongoDb.js";
import answerRoutes from "./routes/Answers.js"
// Load environment variables from .env file
dotenv.config();
// connectDB();
const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



app.use('/users', userRoutes)
app.use('/questions', questionRoutes)
app.use("/answers", answerRoutes);
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

if (!CONNECTION_URL) {
  console.error("CONNECTION_URL is not defined in environment variables.");
  process.exit(1); // Exit with an error code
}

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Database connection error: ${err.message}`);
    process.exit(1); // Exit if connection fails
  });
  app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    res.status(500).send('Something went wrong!');
  });

