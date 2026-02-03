import bcrypt from "bcrypt";
import { signToken } from "../../utils/jwt.js";

export const registerUser = async (email: string, password: string) => {
  /**
   * Hash password
   */
  const hashedPassword = await bcrypt.hash(password, 10);

  /**
   * TEMP: DB insert will come later
   */
  console.log("Saving user:", {
    email,
    hashedPassword,
  });

  /**
   * Generate JWT
   */
  const accessToken = signToken({ userId: "temp-user-id" }, "15m");

  return {
    accessToken,
  };
};
