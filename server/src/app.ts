/**
 * Node Imports
 */
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "@/config/env.js";

export const createApp = () => {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      credentials: true,
      origin: env.CLIENT_URL,
    }),
  );

  app.use(
    express.urlencoded({
      extended: true,
      limit: "10mb",
    }),
  );

  app.use(
    express.json({
      limit: "10mb",
    }),
  );
  return app;
};
