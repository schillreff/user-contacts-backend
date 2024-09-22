import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/appError';
import { IContactRequest } from '../../interfaces/contact';

export const updateContactService = async (
  { name, email, phone }: IContactRequest,
  id: string,
  userId: string,
): Promise<Contact | Array<number | Object>> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({ id, user: { id: userId } });

  if (!findContact) {
    throw new AppError('Contact not found', 404);
  }

  const findContactEmail = await contactRepository.findOneBy({ email, user: { id: userId } });

  if (findContactEmail && findContactEmail.id !== id) {
    throw new AppError('This email already exists in contacts');
  }

  await contactRepository.update(id, {
    name: name,
    email: email,
    phone: phone,
  });

  const contact = await contactRepository.findOneBy({
    id,
  });

  return contact!;
};
