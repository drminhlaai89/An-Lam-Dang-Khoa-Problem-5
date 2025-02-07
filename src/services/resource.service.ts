import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { ResourceEntity } from '../entities/resource.entity';
import { Resource } from '../interfaces/resource.interface';

class ResourceService {
  private resourceRepository: Repository<ResourceEntity>;

  constructor() {
    this.resourceRepository = AppDataSource.getRepository(ResourceEntity);
  }

  // Create a resource
  async create(data: Omit<Resource, 'id' | 'createdAt' | 'updatedAt'>): Promise<Resource> {
    const resource = this.resourceRepository.create(data);
    return this.resourceRepository.save(resource);
  }

  // Get all resources with basic filtering
  async getAll(filters: { name?: string; description?: string } = {}): Promise<Resource[]> {
    const queryBuilder = this.resourceRepository.createQueryBuilder('resource');

    if (filters.name) {
      queryBuilder.andWhere('resource.name ILIKE :name', { name: `%${filters.name}%` });
    }

    if (filters.description) {
      queryBuilder.andWhere('resource.description ILIKE :description', { description: `%${filters.description}%` });
    }

    return queryBuilder.getMany();
  }

  // Get a single resource by ID
  async getById(id: string): Promise<Resource | null> {
    return this.resourceRepository.findOneBy({ id });
  }

  // Update a resource
  async update(id: string, data: Partial<Omit<Resource, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Resource | null> {
    await this.resourceRepository.update(id, data);
    return this.getById(id);
  }

  // Delete a resource
  async delete(id: string): Promise<boolean> {
    const result = await this.resourceRepository.delete(id);
    return result.affected ? result.affected > 0 : false;
  }
}

export default new ResourceService(); 