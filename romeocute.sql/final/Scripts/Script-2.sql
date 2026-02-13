/*CREATE DATABASE romeocute;
USE romeocute;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  rol ENUM('admin','visitante') DEFAULT 'visitante'
);

-- Usuario ADMIN
INSERT INTO usuarios (email, password, rol)
VALUES (
  'romeocute@gmail.com',
  '$2b$10$7l5oMgZ555q4f.Lj4.4k.O/BJVdML43rp1x/4wf222TH30Wn1jIMy',
  'admin'
);

-- Usuario VISITANTE de prueba
INSERT INTO usuarios (email, password, rol)
VALUES (
  'visitante@ejemplo.com',
  '$2b$10$7l5oMgZ555q4f.Lj4.4k.O/BJVdML43rp1x/4wf222TH30Wn1jIMy',
  'visitante'
);
SHOW TABLES;
SELECT * FROM usuarios;

CREATE USER 'romeocute'@'localhost' IDENTIFIED BY 'tu_contraseña';
GRANT ALL PRIVILEGES ON romeocute.* TO 'romeocute'@'localhost';
FLUSH PRIVILEGES;*/