import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { handleErrorMiddleware } from './middlewares/handleError.middleware';
import { initializerRouter } from './routes';

const app = express();

const corsOrigin = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors());

app.use(express.json());

initializerRouter(app);

app.use(handleErrorMiddleware);

export default app;
