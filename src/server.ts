import 'reflect-metadata';
import express from 'express';
import resourceRouter from './routes/resource.routes';
import { AppDataSource } from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/resources', resourceRouter);

// Initialize TypeORM connection
AppDataSource.initialize()
  .then(() => {
    console.log('Database connection established');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  }); 