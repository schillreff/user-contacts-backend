import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { updateUserService } from '../../services/user/updateUser.service';

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const updatedUser = await updateUserService(req.body, id);
  return res.status(200).json(instanceToPlain(updatedUser));
};
