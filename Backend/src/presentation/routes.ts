import { Router } from "express";
import { ExampleRoutes } from "./modules/example/example.routes";
import { CategoriasRoutes } from "./modules/categorias/categorias.routes";
import { ProductosRoutes } from "./modules/productos/productos.routes";

export class AppRoutes {

  static get routes(): Router {
    const router = Router();
    const apiRouter = Router();

    // Definir rutas de los módulos
    apiRouter.use("/example", ExampleRoutes.routes);
    apiRouter.use("/categorias", CategoriasRoutes.routes);
    apiRouter.use("/productos", ProductosRoutes.routes);

    router.use("/api", apiRouter);

    return router;
  }
}