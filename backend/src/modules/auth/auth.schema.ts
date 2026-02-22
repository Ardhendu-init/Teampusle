import { z } from "zod";

/**
 * Register validation
 */
export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

/**
 * Login validation
 */
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

/**
 * Extract TypeScript types from schemas
 */
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
