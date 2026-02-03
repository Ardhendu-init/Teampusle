import type { Request, Response } from "express";
import { registerSchema } from "./auth.schema.js";
import { registerUser } from "./auth.service.js";
import { success } from "../../utils/response.js";

export const register = async (req: Request, res: Response) => {
  /**
   * Validate request body
   */
  const body = registerSchema.parse(req.body);

  /**
   * Call service layer
   */
  const data = await registerUser(body.email, body.password);

  /**
   * Send standardized response
   */
  return res.json(success(data));
};
