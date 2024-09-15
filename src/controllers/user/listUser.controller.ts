import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { listUserService } from '../../services/user/listUser.service';

export const listUserController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const user = await listUserService(id);
  return res.status(200).json(instanceToPlain(user));
};
