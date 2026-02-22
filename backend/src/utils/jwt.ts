import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

/**
 * Sign Access Token
 */
export const signAccessToken = (userId: string) => {
  return jwt.sign({ userId }, env.JWT_SECRET, { expiresIn: "15m" });
};

/**
 * Verify Access Token
 */
export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET);
};
