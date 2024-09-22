import { Request, Response } from 'express';
import { deleteContactService } from '../../services/contact/deleteContact.service';

export const deleteContactController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;
  await deleteContactService(id, userId);
  return res.status(204).json({
    message: 'Successfully deleted',
  });
};
