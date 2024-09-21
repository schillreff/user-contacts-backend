import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { createContactService } from '../../services/contact/createContact.service';

export const createContactController = async (req: Request, res: Response) => {
  const userID = req.user.id;
  const createdContact = await createContactService(req.body, userID);
  return res.status(201).json(instanceToPlain(createdContact));
};

