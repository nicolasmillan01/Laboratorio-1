import { Request, Response } from 'express';
import { getProductosService } from './productos.service';

export const getProductos = async (req: Request, res: Response) => {
    try {
        const data = await getProductosService();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error });
    }
};