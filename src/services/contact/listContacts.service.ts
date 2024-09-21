import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';

export const listContactsService = async (id: string): Promise<Contact[]> => {
  const userRepository = AppDataSource.getRepository(Contact);

  const contacts = await userRepository.find({ where: { user: { id } } });

  return contacts;
};
