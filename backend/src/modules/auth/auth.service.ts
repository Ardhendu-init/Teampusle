import bcrypt from "bcrypt";
import { signToken } from "../../utils/jwt.js";

export const registerUser = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  // DB insert will go here later

  const accessToken = signToken({ userId: "temp-id" }, "15m");

  return { accessToken };
};
