import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';
import { AppError } from '../errors/appError';

export const validateSerializerMiddleware = (serializer: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await serializer.validate(req.body, {
      stripUnknown: true,
      abortEarly: false,
    });

    return next();
  } catch (error) {
    const { errors } = error as ValidationError;
    throw new AppError(`${errors[0]}`, 400);
  }
};