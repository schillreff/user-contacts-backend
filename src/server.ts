import app from './app';
import { AppDataSource } from './data-source';

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log(`Connected to ${process.env.POSTGRES_DB} database`);
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
    });

  app.listen(3001, () => {
    console.log('Server running on port 3001');
    console.log('http://localhost:3001/');
  });
})();
