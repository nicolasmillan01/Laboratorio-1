import { pool } from '../../../config/database';

export const getCategoriasService = async () => {
    const result = await pool.query('SELECT * FROM categorias ORDER BY id ASC');
    return result.rows;
};