import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.js";
// import {errorMiddleware} from "./mi"

const app = express();

app.use(cors());
app.use(express.json()); //Converts raw request body → req.body,Without this, req.body is undefined

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});
app.use("/api/v1/auth", authRoutes);

// app.use(errorMiddleware)

export default app;
