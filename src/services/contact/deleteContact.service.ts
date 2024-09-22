import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/appError';

export const deleteContactService = async (id: string, userId: string): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({ id, user: { id: userId } });

  if (!findContact) {
    throw new AppError('Contact not found', 404);
  }

  await contactRepository.delete({ id });
};
