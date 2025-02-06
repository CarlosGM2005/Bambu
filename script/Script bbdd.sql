-- Tabla TIPO_PRODUCTO
CREATE TABLE TIPO_PRODUCTO (
  nombre varchar(25) NOT NULL PRIMARY KEY
);

-- Tabla PRODUCTO
CREATE TABLE PRODUCTO (
  nombre_plato varchar(45) NOT NULL PRIMARY KEY,
  descripcion text NOT NULL,
  precio decimal(4, 2) NOT NULL,
  alergenos varchar(150) NOT NULL,
  urlImg varchar(75) NOT NULL,  
  disponibilidad BOOLEAN NOT NULL, 
  tipo_producto varchar(25) NOT NULL,
  FOREIGN KEY (tipo_producto) REFERENCES TIPO_PRODUCTO (nombre)
);

-- Tabla USUARIO
CREATE TABLE USUARIO (
  dni varchar(9) NOT NULL PRIMARY KEY,  
  nombre varchar(20) NOT NULL,
  apellidos varchar(50) NOT NULL,
  email varchar(64) NOT NULL,
  telefono varchar(9) NOT NULL,
  contraseña varchar(15) NOT NULL
);

-- Tabla LOCAL
CREATE TABLE LOCAL (
  id_local smallint(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,  -- Autoincrementable
  nombre varchar(20) NOT NULL,  
  direccion varchar(50) NOT NULL,  
  telefono varchar(9) NOT NULL, 
  cant_mesas tinyint(2) NOT NULL
);

-- Tabla PEDIDO
CREATE TABLE PEDIDO (
  num_pedido int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,  -- Autoincrementable
  hora time NOT NULL,
  fecha date NOT NULL,
  importe_total decimal(5, 2) NOT NULL, 
  dni_usuario varchar(9) NOT NULL,  
  id_local smallint(3) NOT NULL,
  FOREIGN KEY (dni_usuario) REFERENCES USUARIO (dni),
  FOREIGN KEY (id_local) REFERENCES LOCAL (id_local)
);

-- Tabla CONTIENE
CREATE TABLE CONTIENE (
  nombre_plato varchar(45) NOT NULL,
  num_pedido int(5) NOT NULL,
  cantidad tinyint(2) NOT NULL,
  PRIMARY KEY (nombre_plato, num_pedido),  -- Clave primaria compuesta
  FOREIGN KEY (nombre_plato) REFERENCES PRODUCTO (nombre_plato),
  FOREIGN KEY (num_pedido) REFERENCES PEDIDO (num_pedido)
);

-- Tabla RESERVA
CREATE TABLE RESERVA (
  num_reserva int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,  -- Autoincrementable
  fecha date NOT NULL,
  hora time NOT NULL,
  cant_persona tinyint(2) NOT NULL,
  dni_usuario varchar(9) NOT NULL,
  id_local smallint(3) NOT NULL,
  FOREIGN KEY (dni_usuario) REFERENCES USUARIO (dni),
  FOREIGN KEY (id_local) REFERENCES LOCAL (id_local)
);

-- Restricciones de clave foránea (ya las has declarado correctamente)
ALTER TABLE PRODUCTO ADD CONSTRAINT PRODUCTO_tipo_producto_fk FOREIGN KEY (tipo_producto) REFERENCES TIPO_PRODUCTO (nombre);
ALTER TABLE CONTIENE ADD CONSTRAINT CONTIENE_nombre_plato_fk FOREIGN KEY (nombre_plato) REFERENCES PRODUCTO (nombre_plato);
ALTER TABLE CONTIENE ADD CONSTRAINT CONTIENE_num_pedido_fk FOREIGN KEY (num_pedido) REFERENCES PEDIDO (num_pedido);
ALTER TABLE PEDIDO ADD CONSTRAINT PEDIDO_dni_usuario_fk FOREIGN KEY (dni_usuario) REFERENCES USUARIO (dni);
ALTER TABLE RESERVA ADD CONSTRAINT RESERVA_dni_usuario_fk FOREIGN KEY (dni_usuario) REFERENCES USUARIO (dni);
ALTER TABLE RESERVA ADD CONSTRAINT RESERVA_id_local_fk FOREIGN KEY (id_local) REFERENCES LOCAL (id_local);
ALTER TABLE PEDIDO ADD CONSTRAINT PEDIDO_id_local_fk FOREIGN KEY (id_local) REFERENCES LOCAL (id_local);