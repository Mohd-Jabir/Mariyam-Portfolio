import Feedback from "../models/Feedback.js";

export const createFeedback = async (req, res, next) => {
  try {
    const { name, message, rating } = req.body;

    const feedback = await Feedback.create({
      name: name.trim(),
      message: message.trim(),
      rating: Number(rating),
    });

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedback,
    });
  } catch (error) {
    next(error);
  }
};

export const getFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 }).lean();

    res.status(200).json({
      success: true,
      count: feedback.length,
      feedback,
    });
  } catch (error) {
    next(error);
  }
};
