import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const signToken = (payload: object, expiresIn: "15m") => {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET);
};
