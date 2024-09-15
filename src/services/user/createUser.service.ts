import { hash } from 'bcrypt';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IUserRequest } from '../../interfaces/user';

export const createUserService = async ({ name, email, phone, password }: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findEmail = await userRepository.findOneBy({ email });

  if (findEmail) {
    throw new AppError('Previously registered email');
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return user;
};