import type { Request, Response } from "express";
import { registerSchema } from "./auth.schema.js";
import { registerUser } from "./auth.service.js";
import { success } from "../../utils/response.js";

export const register = async (req: Request, res: Response) => {
  const body = registerSchema.parse(req.body);

  const data = await registerUser(body.email, body.password);

  res.json(success(data));
};
