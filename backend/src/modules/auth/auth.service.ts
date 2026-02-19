import bcrypt from "bcrypt";
import { signToken } from "../../utils/jwt.js";
import prisma from "../../config/db.js";
import { AppError } from "../../utils/appError.js";

export const registerUser = async (email: string, password: string) => {
  /**
   * Check if user already exists
   */
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new AppError("User already registered", "USER_EXISTS", 400);
  }

  /**
   * Hash password
   */
  const hashedPassword = await bcrypt.hash(password, 10);

  /**
   * Save user
   */
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  /**
   * Generate access token
   */
  const accessToken = signToken({ userId: user.id }, "15m");

  return { accessToken };
};
