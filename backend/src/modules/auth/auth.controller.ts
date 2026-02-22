import type { Request, Response } from "express";
import {
  loginSchema,
  registerSchema,
  type LoginInput,
  type RegisterInput,
} from "./auth.schema.js";
import { loginUser, registerUser } from "./auth.service.js";
import { success } from "../../utils/response.js";

export const register = async (req: Request, res: Response) => {
  /**
   * Validate request body
   */
  const body: RegisterInput = registerSchema.parse(req.body);

  /**
   * Call service layer
   */
  const data = await registerUser(body.email, body.password);

  /**
   * Send standardized response
   */
  return res.json(success(data));
};

export const login = async (req: Request, res: Response) => {
  /**
   * Validate request body
   */
  const body: LoginInput = loginSchema.parse(req.body);

  /**
   * Call service layer
   */
  const data = await loginUser(body.email, body.password);

  /**
   * Send standardized response
   */
  return res.json(success(data));
};
