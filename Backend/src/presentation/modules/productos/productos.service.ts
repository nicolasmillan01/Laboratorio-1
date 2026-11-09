import { pool } from '../../../config/database';

export const getProductosService = async () => {
    const query = `
        SELECT p.id, p.nombre, p.precio, p.stock, c.nombre AS categoria
        FROM productos p
        LEFT JOIN categorias c ON p.categoria_id = c.id
        ORDER BY p.id ASC
    `;
    const result = await pool.query(query);
    return result.rows;
};