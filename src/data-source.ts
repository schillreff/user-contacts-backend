import 'dotenv/config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource(
  process.env.NODE_ENV === 'test'
    ? {
        type: 'sqlite',
        database: ':memory:',
        synchronize: true,
        entities: ['src/entities/*.ts'],
      }
    : {
        type: 'postgres',
        host: process.env.HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: ['./**/*.entity.{js,ts}'],
        migrations: ['src/migrations/*.ts'],
      },
);
