import { Router } from 'express';
import { getProductos } from './productos.controller';

export class ProductosRoutes {
  static get routes(): Router {
    const router = Router();
    router.get('/', getProductos);
    return router;
  }
}