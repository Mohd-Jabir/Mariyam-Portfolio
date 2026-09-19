import { sendContactEmail } from "../services/emailService.js";

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully",
    });
  } catch (error) {
    next(error);
  }
};
