import { Express } from 'express';
import { router as userRouter } from './../routes/user/user.routes';

export const initializerRouter = (app: Express) => {
  app.use('/user', userRouter);
};
