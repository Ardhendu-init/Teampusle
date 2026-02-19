import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

/**
 * Global middlewares
 */
app.use(cors());
app.use(express.json()); //Converts raw request body → req.body,Without this, req.body is undefined

/**
 * Health check
 */
app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

/**
 * Routes
 */
app.use("/api/v1/auth", authRoutes);

/**
 * Global error handler
 */
app.use(errorMiddleware);

export default app;
