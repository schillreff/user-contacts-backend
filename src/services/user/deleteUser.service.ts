import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';

export const deleteUserService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError('User not found', 404);
  }

  await userRepository.delete({ id });
};
