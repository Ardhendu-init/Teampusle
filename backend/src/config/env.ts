import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT!, // The ! means:“I guarantee this exists”, If it doesn’t → crash immediately
  JWT_SECRET: process.env.JWT_SECRET!,
  DATABASE_URL: process.env.DATABASE_URL!,
};
