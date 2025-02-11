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
  dni varchar(9),  
  nombre varchar(20) NOT NULL,
  apellidos varchar(50) NOT NULL,
  email varchar(64),
  telefono varchar(9) NOT NULL,
  contraseña varchar(60) NOT NULL,
  PRIMARY KEY (dni, email)
);

-- Tabla LOCAL
CREATE TABLE LOCAL (
  id_local smallint(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,  -- Autoincrementable
  nombre varchar(20) NOT NULL,  
  direccion varchar(50) NOT NULL,  
  telefono varchar(9) NOT NULL, 
  urlImg varchar(75) NOT NULL,
  cant_mesas tinyint(2) NOT NULL
);

-- Tabla PEDIDO
CREATE TABLE PEDIDO (
  num_pedido int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,  -- Autoincrementable
  hora time NOT NULL,
  fecha date NOT NULL,
  importe_total decimal(5, 2) NOT NULL, 
  dni_usuario varchar(9) NOT NULL,  
  email varchar(64), 
  id_local smallint(3) NOT NULL,
  FOREIGN KEY (dni_usuario, email) REFERENCES USUARIO (dni, email),
  FOREIGN KEY (id_local) REFERENCES LOCAL (id_local)
);

-- Tabla Detalles Pedido
CREATE TABLE DETALLESPEDIDO (
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
  email varchar(64),
  id_local smallint(3) NOT NULL,
  FOREIGN KEY (dni_usuario, email) REFERENCES USUARIO (dni, email),
  FOREIGN KEY (id_local) REFERENCES LOCAL (id_local)
);