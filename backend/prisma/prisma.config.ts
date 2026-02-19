import "dotenv/config";
import { defineConfig } from "prisma/config";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export default defineConfig({
  schema: "schema.prisma", // ✅ fixed
  migrations: {
    path: "migrations",
  },
  datasource: {
    url: DATABASE_URL,
  },
});
