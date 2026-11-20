/**
 * Node Imports
 */
import "dotenv/config"

export const env = {
  PORT: Number(process.env.PORT ?? "3000"),
  NODE_ENV: process.env.NODE_ENV ?? "development",
  CLIENT_URL: process.env.CLIENT_URL,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  // GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  REDIS_URL: process.env.REDIS_URL,
  QDRANT_API_KEY: process.env.QDRANT_API_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_URL_POOLED: process.env.DATABASE_URL_POOLED,
  AWS_ENDPOINT_URL_S3: process.env.AWS_ENDPOINT_URL_S3,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  S3_BUCKET: process.env.S3_BUCKET,
  GROQ_API_KEY: process.env.GROQ_API_KEY,
  CHAT_MODEL: process.env.CHAT_MODEL,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  EMBEDDING_MODEL: process.env.EMBEDDING_MODEL,
  DEFAULT_DIMENSION: Number(process.env.DEFAULT_DIMENSION),
  TAVILY_API_KEY: process.env.TAVILY_API_KEY,
};