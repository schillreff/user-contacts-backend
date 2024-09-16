import { Express } from 'express';
import { router as loginRouter } from './../routes/session/session.routes';
import { router as userRouter } from './../routes/user/user.routes';

export const initializerRouter = (app: Express) => {
  app.use('/user', userRouter);
  app.use('/login', loginRouter);
};
