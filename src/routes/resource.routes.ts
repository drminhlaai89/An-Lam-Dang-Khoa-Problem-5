import { Router, RequestHandler } from 'express';
import resourceService from '../services/resource.service';

const router = Router();

// Create a resource
const createResource: RequestHandler = async (req, res, next) => {
  try {
    const resource = await resourceService.create(req.body);
    res.status(201).json(resource);
  } catch (error) {
    next(error);
  }
};

// Get all resources
const getAllResources: RequestHandler = async (req, res, next) => {
  try {
    const filters = {
      name: req.query.name as string,
      description: req.query.description as string,
    };
    const resources = await resourceService.getAll(filters);
    res.json(resources);
  } catch (error) {
    next(error);
  }
};

// Get single resource
const getResource: RequestHandler = async (req, res, next) => {
  try {
    const resource = await resourceService.getById(req.params.id);
    if (!resource) {
      res.status(404).json({ error: 'Resource not found' });
      return;
    }
    res.json(resource);
  } catch (error) {
    next(error);
  }
};

// Update resource
const updateResource: RequestHandler = async (req, res, next) => {
  try {
    const resource = await resourceService.update(req.params.id, req.body);
    if (!resource) {
      res.status(404).json({ error: 'Resource not found' });
      return;
    }
    res.json(resource);
  } catch (error) {
    next(error);
  }
};

// Delete resource
const deleteResource: RequestHandler = async (req, res, next) => {
  try {
    const deleted = await resourceService.delete(req.params.id);
    if (!deleted) {
      res.status(404).json({ error: 'Resource not found' });
      return;
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

router.post('/', createResource);
router.get('/', getAllResources);
router.get('/:id', getResource);
router.put('/:id', updateResource);
router.delete('/:id', deleteResource);

export default router;
