import "dotenv/config";

import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

import { connectDb } from "./config/db.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

const app = express();

const PORT = Number(process.env.PORT) || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.disable("x-powered-by");

if (NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  }),
);
const configuredOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = [
  ...configuredOrigins,
  ...(NODE_ENV !== "production"
    ? ["http://localhost:5173", "http://127.0.0.1:5173"]
    : []),
];

console.log("------------------------------------------------");
console.log("Environment:", NODE_ENV);
console.log("Allowed CORS origins:", allowedOrigins);
console.log("------------------------------------------------");

app.use(
  cors({
    origin: (origin, callback) => {
   
      if (!origin) {
        return callback(null, true);
      }
      console.log("Incoming CORS origin:", origin);
      if (allowedOrigins.includes(origin)) {
        console.log("CORS allowed:", origin);
        return callback(null, true);
      }
      console.log("CORS blocked:", origin);

      return callback(null, false);
    },

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],

    credentials: false,
  }),
);
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use(globalLimiter);

app.use(
  express.json({
    limit: "100kb",
  }),
);
await connectDb();


app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    status: "OK",
    message: "Server is healthy",
    environment: NODE_ENV,
  });
});

app.use("/api/feedback", feedbackRoutes);

app.use("/api/contact", contactRoutes);

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
