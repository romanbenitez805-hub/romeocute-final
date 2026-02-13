 /*
 no sabia donde ponerlo y lo puse aca, mucgas gracias 
 
 
 CREATE DATABASE romeocute;
USE romeocute;

CREATE TABLE staff (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  rol VARCHAR(100),
  descripcion TEXT,
  edad INT,
  gmail VARCHAR(100),
  foto VARCHAR(255)  
);
ALTER TABLE staff ADD CONSTRAINT unique_staff UNIQUE (gmail);

ALTER TABLE staff ADD COLUMN activo TINYINT(1) DEFAULT 1;
UPDATE staff SET activo = 0 WHERE id = 2;

ALTER TABLE staff ADD CONSTRAINT unique_nombre UNIQUE (nombre);

INSERT INTO staff (nombre, rol, descripcion, edad, gmail) VALUES
('Juan Gómez', 'Gerente General', 'Más de 20 años de experiencia', 45, 'juan.gomez@gmail.com'),
('María López', 'Jefa de Operaciones', 'Coordina operaciones diarias', 38, 'maria.lopez@gmail.com'),
('Carlos Pérez',  'Supervisor de Producción', 'Garantiza calidad en procesos', 40, 'carlos.perez@gmail.com');

UPDATE staff SET foto = '/img/juan.jpg' WHERE nombre = 'Juan Gómez';
UPDATE staff SET foto = '/img/maria.jpg' WHERE nombre = 'María López';
UPDATE staff SET foto = '/img/carlos.jpg' WHERE nombre = 'Carlos Pérez';


CREATE USER 'romeocute'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON romeocute.* TO 'romeocute'@'localhost';
FLUSH PRIVILEGES;
*/

