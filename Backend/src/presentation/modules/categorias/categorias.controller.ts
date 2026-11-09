import { Request, Response } from 'express';
import { getCategoriasService } from './categorias.service';

export const getCategorias = async (req: Request, res: Response) => {
    try {
        const data = await getCategoriasService();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener categorías', error });
    }
};