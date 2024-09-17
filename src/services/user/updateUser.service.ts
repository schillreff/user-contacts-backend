import { hash } from 'bcrypt';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IUserRequest } from '../../interfaces/user';

export const updateUserService = async ({ name, email, phone, password }: IUserRequest, id: string): Promise<User | Array<number | Object>> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError('User not found', 404);
  }

  const findEmail = await userRepository.findOneBy({ email });

  if (findEmail?.id !== findUser.id && findEmail?.id !== undefined) {
    throw new AppError('Previously registered email');
  }

  await userRepository.update(id, {
    name: name,
    email: email,
    phone: phone,
    password: await hash(password, 10),
  });

  const user = await userRepository.findOneBy({
    id,
  });

  return user!;
};
