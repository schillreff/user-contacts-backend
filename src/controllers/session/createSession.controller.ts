import { Request, Response } from 'express';
import { IUserLogin } from '../../interfaces/user';
import { createSessionService } from '../../services/session/createSession.service';

export const createSessionController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body;
  const resSession = await createSessionService(data);
  return res.json(resSession);
};
