CREATE TABLE IF NOT EXISTS categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio NUMERIC(10, 2) NOT NULL,
    categoria_id INT REFERENCES categorias(id) ON DELETE CASCADE
);

INSERT INTO categorias (nombre, descripcion) VALUES 
('Electrónica', 'Dispositivos y accesorios'),
('Hogar', 'Artículos para el hogar');

INSERT INTO productos (nombre, precio, categoria_id) VALUES 
('Laptop', 1200.00, 1),
('Silla de Oficina', 150.00, 2);