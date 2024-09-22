import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { updateContactService } from '../../services/contact/updateContact.service';

export const updateContactController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;
  const updatedContact = await updateContactService(req.body, id, userId);
  return res.status(200).json(instanceToPlain(updatedContact));
};
