import { compare } from 'bcrypt';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IUserLogin } from '../../interfaces/user';

export const createSessionService = async ({ email, password }: IUserLogin): Promise<Object> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError('Invalid email or password', 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError('Invalid email or password', 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    expiresIn: '24h',
    subject: user.id,
  });

  const resSession = {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  };

  return resSession;
};
