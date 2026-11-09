import { Router } from 'express';
import { getCategorias } from './categorias.controller';

export class CategoriasRoutes {
  static get routes(): Router {
    const router = Router();
    router.get('/', getCategorias);
    return router;
  }
}