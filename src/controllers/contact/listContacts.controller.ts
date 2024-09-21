import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { listContactsService } from '../../services/contact/listContacts.service';

export const listContactsController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const contacts = await listContactsService(id);
  return res.status(200).json(instanceToPlain(contacts));
};
