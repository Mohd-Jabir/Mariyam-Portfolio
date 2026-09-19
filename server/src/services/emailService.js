import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Escape user-controlled values before inserting them into HTML.
 * This prevents submitted names/messages from becoming executable HTML.
 */
const escapeHtml = (value = "") => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

/**
 * Convert line breaks into HTML breaks.
 */
const formatMessage = (value = "") => {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
};

/**
 * Basic email validation.
 */
const isValidEmail = (email = "") => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Send contact form email to Mariyam Khatoon.
 */
export const sendContactEmail = async ({ name, email, subject, message }) => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!process.env.CONTACT_EMAIL) {
    throw new Error("CONTACT_EMAIL is not configured.");
  }

  if (!name?.trim()) {
    throw new Error("Name is required.");
  }

  if (!email?.trim() || !isValidEmail(email.trim())) {
    throw new Error("A valid email address is required.");
  }

  if (!subject?.trim()) {
    throw new Error("Subject is required.");
  }

  if (!message?.trim()) {
    throw new Error("Message is required.");
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeSubject = escapeHtml(subject.trim());
  const safeMessage = formatMessage(message.trim());

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanSubject = subject.trim();
  const cleanMessage = message.trim();

  const { data, error } = await resend.emails.send({
    from:
      process.env.RESEND_FROM_EMAIL ||
      "Mariyam Khatoon <onboarding@resend.dev>",

    to: [process.env.CONTACT_EMAIL],

    replyTo: cleanEmail,

    subject: `New portfolio message — ${cleanSubject}`,

    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>New Portfolio Message</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 0;
            background: #f7f7f5;
            font-family: Arial, Helvetica, sans-serif;
            color: #151515;
          "
        >
          <div
            style="
              width: 100%;
              padding: 40px 16px;
              box-sizing: border-box;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 0 auto;
                background: #ffffff;
                border: 1px solid #dededb;
              "
            >

              <!-- Header -->
              <div
                style="
                  padding: 32px 36px;
                  border-bottom: 1px solid #dededb;
                "
              >
                <div
                  style="
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: #4d0000;
                    margin-bottom: 18px;
                  "
                >
                  Teacher Portfolio
                </div>

                <div
                  style="
                    font-family: Georgia, 'Times New Roman', serif;
                    font-size: 34px;
                    font-weight: 700;
                    line-height: 0.95;
                    letter-spacing: -1.5px;
                  "
                >
                  Mariyam<br />
                  Khatoon
                </div>
              </div>

              <!-- Intro -->
              <div style="padding: 36px;">
                <div
                  style="
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #4d0000;
                    margin-bottom: 12px;
                  "
                >
                  New message
                </div>

                <h1
                  style="
                    margin: 0;
                    font-family: Georgia, 'Times New Roman', serif;
                    font-size: 32px;
                    line-height: 1.1;
                    letter-spacing: -1px;
                    font-weight: 700;
                  "
                >
                  Someone started a conversation.
                </h1>

                <p
                  style="
                    margin: 18px 0 0;
                    font-size: 15px;
                    line-height: 1.7;
                    color: #6b6b6b;
                  "
                >
                  A visitor has submitted a new message through
                  your portfolio website.
                </p>
              </div>

              <!-- Details -->
              <div
                style="
                  margin: 0 36px;
                  border-top: 1px solid #dededb;
                  border-bottom: 1px solid #dededb;
                "
              >

                <!-- Name -->
                <div
                  style="
                    padding: 22px 0;
                    border-bottom: 1px solid #eeeeeb;
                  "
                >
                  <div
                    style="
                      font-size: 9px;
                      font-weight: 700;
                      letter-spacing: 2px;
                      text-transform: uppercase;
                      color: #999999;
                      margin-bottom: 8px;
                    "
                  >
                    From
                  </div>

                  <div
                    style="
                      font-family: Georgia, 'Times New Roman', serif;
                      font-size: 21px;
                      font-weight: 700;
                    "
                  >
                    ${safeName}
                  </div>
                </div>

                <!-- Email -->
                <div
                  style="
                    padding: 22px 0;
                    border-bottom: 1px solid #eeeeeb;
                  "
                >
                  <div
                    style="
                      font-size: 9px;
                      font-weight: 700;
                      letter-spacing: 2px;
                      text-transform: uppercase;
                      color: #999999;
                      margin-bottom: 8px;
                    "
                  >
                    Email
                  </div>

                  <a
                    href="mailto:${safeEmail}"
                    style="
                      color: #4d0000;
                      font-size: 15px;
                      text-decoration: none;
                    "
                  >
                    ${safeEmail}
                  </a>
                </div>

                <!-- Subject -->
                <div style="padding: 22px 0;">
                  <div
                    style="
                      font-size: 9px;
                      font-weight: 700;
                      letter-spacing: 2px;
                      text-transform: uppercase;
                      color: #999999;
                      margin-bottom: 8px;
                    "
                  >
                    Subject
                  </div>

                  <div
                    style="
                      font-size: 16px;
                      font-weight: 600;
                    "
                  >
                    ${safeSubject}
                  </div>
                </div>

              </div>

              <!-- Message -->
              <div style="padding: 36px;">
                <div
                  style="
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #4d0000;
                    margin-bottom: 14px;
                  "
                >
                  Message
                </div>

                <div
                  style="
                    padding: 24px;
                    background: #f7f7f5;
                    border-left: 3px solid #4d0000;
                    font-size: 15px;
                    line-height: 1.8;
                    color: #333333;
                  "
                >
                  ${safeMessage}
                </div>
              </div>

              <!-- Reply -->
              <div
                style="
                  padding: 0 36px 36px;
                "
              >
                <a
                  href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(
                    cleanSubject,
                  )}"
                  style="
                    display: inline-block;
                    padding: 15px 22px;
                    background: #151515;
                    color: #ffffff;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                  "
                >
                  Reply to ${safeName}
                </a>
              </div>

              <!-- Footer -->
              <div
                style="
                  padding: 22px 36px;
                  background: #151515;
                  color: #ffffff;
                "
              >
                <div
                  style="
                    font-family: Georgia, 'Times New Roman', serif;
                    font-size: 18px;
                    font-weight: 700;
                  "
                >
                  MARIYAM KHATOON
                </div>

                <div
                  style="
                    margin-top: 7px;
                    font-size: 9px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #aaaaaa;
                  "
                >
                  English · Literature · Humanities
                </div>
              </div>

            </div>
          </div>
        </body>
      </html>
    `,

    text: `
NEW PORTFOLIO MESSAGE

Mariyam Khatoon — Teacher Portfolio

Someone started a conversation.

FROM
${cleanName}

EMAIL
${cleanEmail}

SUBJECT
${cleanSubject}

MESSAGE
${cleanMessage}

Reply directly to:
${cleanEmail}
    `.trim(),
  });

  if (error) {
    console.error("Resend contact email error:", error);

    throw new Error(error.message || "Unable to send contact email.");
  }

  return {
    id: data?.id,
    success: true,
  };
};
