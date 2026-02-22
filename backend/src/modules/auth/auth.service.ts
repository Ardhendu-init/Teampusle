import bcrypt from "bcrypt";

import prisma from "../../config/db.js";
import { AppError } from "../../utils/appError.js";
import { signAccessToken } from "../../utils/jwt.js";

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
  const accessToken = signAccessToken(user.id);

  return { accessToken };
};

export const loginUser = async (email: string, password: string) => {
  //find user by email

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new AppError("Invalid email", "INVALID CREDENTIALS ", 401);
  }

  //Password comparison
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new AppError("Invalid password", "INVALID_CREDENTIALS", 401);
  }
  //generate access token

  const accessToken = signAccessToken(user.id);
  return { accessToken };
};
