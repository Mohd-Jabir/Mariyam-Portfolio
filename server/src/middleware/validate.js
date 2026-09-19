export const validateFeedback = (req, res, next) => {
  const { name, message, rating } = req.body;

  if (!name || !message || rating === undefined) {
    return res.status(400).json({
      success: false,
      message: "Name, message and rating are required",
    });
  }

  if (typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Name must contain at least 2 characters",
    });
  }

  if (typeof message !== "string" || message.trim().length < 5) {
    return res.status(400).json({
      success: false,
      message: "Message must contain at least 5 characters",
    });
  }

  if (
    !Number.isInteger(Number(rating)) ||
    Number(rating) < 1 ||
    Number(rating) > 5
  ) {
    return res.status(400).json({
      success: false,
      message: "Rating must be between 1 and 5",
    });
  }

  next();
};

export const validateContact = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, subject and message are required",
    });
  }

  if (typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Name must contain at least 2 characters",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email",
    });
  }

  if (typeof subject !== "string" || subject.trim().length < 3) {
    return res.status(400).json({
      success: false,
      message: "Subject must contain at least 3 characters",
    });
  }

  if (typeof message !== "string" || message.trim().length < 5) {
    return res.status(400).json({
      success: false,
      message: "Message must contain at least 5 characters",
    });
  }

  next();
};
