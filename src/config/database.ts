import { DataSource } from 'typeorm';
import { ResourceEntity } from '../entities/resource.entity';

export const AppDataSource = new DataSource({
  type: "postgres" as const,
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '1',
  database: process.env.DB_NAME || 'resource_db',
  synchronize: true, // Be careful with this in production
  logging: true,
  entities: [ResourceEntity],
  subscribers: [],
  migrations: []
}); 