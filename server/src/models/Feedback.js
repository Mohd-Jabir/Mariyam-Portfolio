import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 500,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  },
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
