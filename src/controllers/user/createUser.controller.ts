import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { IUserRequest } from '../../interfaces/user';
import { createUserService } from '../../services/user/createUser.service';

export const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const createdUser = await createUserService(user);
  return res.status(201).json(instanceToPlain(createdUser));
};
