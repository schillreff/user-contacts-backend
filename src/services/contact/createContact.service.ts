import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IContactRequest } from '../../interfaces/contact';

export const createContactService = async ({ name, email, phone }: IContactRequest, userId: string): Promise<Contact> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  const findContactEmail = await contactRepository.findOneBy({ email, user: { id: userId } });

  if (findContactEmail) {
    throw new AppError('This email already exists in contacts');
  }

  const contact = contactRepository.create({
    name,
    email,
    phone,
    user,
  });

  await contactRepository.save(contact);

  return contact;
};
