CREATE TABLE IF NOT EXISTS categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio NUMERIC(10, 2) NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    categoria_id INT REFERENCES categorias(id) ON DELETE CASCADE
);

INSERT INTO categorias (nombre, descripcion) VALUES 
('Electrónica', 'Dispositivos y accesorios'),
('Hogar', 'Artículos para el hogar');

INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES 
('Laptop', 1200.00, 10, 1),
('Silla de Oficina', 150.00, 25, 2);