/**
 * Node Imports
 */
import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  CLIENT_URL: z.string().url(),

  BETTER_AUTH_SECRET: z.string().min(32),
  BETTER_AUTH_URL: z.string().url(),

  DATABASE_URL: z.string().min(1),
  DATABASE_URL_POOLED: z.string().min(1),

  REDIS_URL: z.string().min(1),

  AWS_ENDPOINT_URL_S3: z.string().url(),
  AWS_ACCESS_KEY_ID: z.string().min(1),
  AWS_SECRET_ACCESS_KEY: z.string().min(1),
  AWS_REGION: z.string().min(1),
  S3_BUCKET: z.string().min(1),

  GROQ_API_KEY: z.string().min(1),
  CHAT_MODEL: z.string().min(1),
  GEMINI_API_KEY: z.string().min(1),
  EMBEDDING_MODEL: z.string().min(1),
  DEFAULT_DIMENSION: z.coerce.number().int().positive(),
  TAVILY_API_KEY: z.string().min(1),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("Invalid environment variables:");
  for (const issue of result.error.issues) {
    console.error(`  - ${issue.path.join(".")}: ${issue.message}`);
  }
  process.exit(1);
}

export const env = result.data;
export const isProd = env.NODE_ENV === "production";