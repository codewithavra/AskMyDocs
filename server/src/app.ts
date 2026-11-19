/**
 * Node Imports
 */
import express from "express";
import cors from "cors";
import helmet from "helmet";

const createApp = () => {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      credentials: true,
    }),
  );

  app.use(
    express.urlencoded({
      extended: true,
      limit: "1mb",
    }),
  );
  app.use(
    express.json({
      limit: "1mb",
    }),
  );

  return app;
};

export default createApp;
