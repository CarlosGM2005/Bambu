INSERT INTO TIPO_PRODUCTO (nombre) VALUES ('surtidos');

INSERT INTO PRODUCTO (nombre_plato, descripcion, precio, alergenos, urlImg, disponibilidad, tipo_producto) VALUES
('Surtido Nº1', '4 unid de Sésamo Roll Salmón , 4 Makis de Salmón, 2 Nigiris Salmón y 2 Nigiris de Atún.', 18.50, 'Crustáceos, Huevos, Moluscos, Pescado, Sésamo, Sulfitos', 'assets/images/productos/surtidos/SURTIDO1.png', TRUE, 'surtidos'),
('Surtido Nº2', '4 unidades de Makis de salmón, 2 de Nigiris Pez mantequilla, 2 Nigiris atún y 2 Nigiris Salmón', 18.50, 'Pescado, Sulfitos', 'assets/images/productos/surtidos/SURTIDO2.png', TRUE, 'surtidos'),
('Surtido Nº3', '4 unidades de Sésamo de Atún, 4 de Salmón Roll, 2 Nigiris de Salmón y 2 Nigiris Pez Mantequilla', 18.50, 'Pescado, Sésamo, Soja, Sulfitos', 'assets/images/productos/surtidos/SURTIDO3.png', TRUE, 'surtidos'),
('Surtido Nº4', '4 unidades de Salmón Roll, 4 de Maki de Atún y 3 de Sashimi de Salmón', 22.50, 'Pescado, Soja, Sulfitos', 'assets/images/productos/surtidos/SURTIDO4.png', TRUE, 'surtidos'),
('Surtido Nº5', '4 unidades de Ebi Roll, 4 de Sésamo Salmón, 2 Nigiris Salmón y 2 Nigiris Gambas', 16.90, 'Cereales con gluten, Crustáceos, Huevos, Moluscos, Mostaza, Pescado, Soja, Sulfitos', 'assets/images/productos/surtidos/SURTIDO5.png', TRUE, 'surtidos'),
('Surtido Nº6', '4 unidades de Surimi Roll, 4 de Maki Salmón y 4 Maki atún', 18.50, 'Crustáceos, Huevos, Moluscos, Pescado, Sulfitos', 'assets/images/productos/surtidos/SURTIDO6.png', TRUE, 'surtidos');

INSERT INTO TIPO_PRODUCTO (nombre) VALUES ('entrantes');

INSERT INTO PRODUCTO (nombre_plato, descripcion, precio, alergenos, urlImg, disponibilidad, tipo_producto) VALUES
('Edamame', 'Habas de soja verde cocidas.', 4.20, 'SOJA', 'assets/images/productos/entrantes/Edamame.png', TRUE, 'entrantes'),
('Gyozas de Pollo', 'Empanadillas rellenas de pollo y verduras.', 7.90, 'CEREALES CON GLUTEN, SÉSAMO Y SOJA', 'assets/images/productos/entrantes/Gyozas.png', TRUE, 'entrantes'),
('Gyozas de Cerdo', 'Empanadillas rellenas de carne de cerdo y verduras.', 7.90, 'CEREALES CON GLUTEN, SÉSAMO Y SOJA', 'assets/images/productos/entrantes/Gyozas.png', TRUE, 'entrantes'),
('Gyozas de Ternera', 'Empanadillas rellenas de carne de ternera y verduras.', 7.90, 'CEREALES CON GLUTEN, SÉSAMO Y SOJA', 'assets/images/productos/entrantes/Gyozas.png', TRUE, 'entrantes'),
('Rollitos Mango Langostinos', 'Rollito relleno de langostino y mango.', 7.90, 'CEREALES CON GLUTEN, SÉSAMO Y SOJA', 'assets/images/productos/entrantes/Rollitos_Mango_Langostinos.png', TRUE, 'entrantes');

INSERT INTO TIPO_PRODUCTO (nombre) VALUES ('arroz y noodles');

INSERT INTO PRODUCTO (nombre_plato, descripcion, precio, alergenos, urlImg, disponibilidad, tipo_producto) VALUES
('Arroz con Soja', 'Arroz salteado con huevo, maíz, zanahoria, salsa soja.', 5.90, 'Apio, Cereales con gluten, Crustáceos, Huevos, Lácteos, Moluscos, Pescado, Soja', 'assets/images/productos/arrozYNoodles/Arroz_con_Soja.png', TRUE, 'arroz y noodles'),
('Arroz Vegetal', 'Arroz salteado con huevo, maíz, zanahoria y salsa Wok.', 5.90, 'Apio, Cereales con gluten, Crustáceos, Huevos, Lácteos, Moluscos, Pescado, Soja', 'assets/images/productos/arrozYNoodles/Arroz_Vegetal.png', TRUE, 'arroz y noodles'),
('Noodles Vegetales', 'Tallarines indonesios salteados con verduras, huevo y salsa Yakisoba.', 5.90, 'Cereales con gluten, Huevos, Soja, Sulfitos', 'assets/images/productos/arrozYNoodles/Noodles.png', TRUE, 'arroz y noodles'),
('Ramen Cerdo', 'Sopa japonesa de fideos de trigo con base de miso, cebollino, huevo, naruto, cerdo cocido y alga nori.', 8.90, 'Cacahuetes, Huevos, Pescado, Sésamo, Soja', 'assets/images/productos/arrozYNoodles/Ramen_Cerdo.png', TRUE, 'arroz y noodles'),
('Ramen Yasai Vegetal', 'Sopa japonesa de fideos de trigo, con base de miso, salsa curry, bambú, setas y alga nori.', 7.95, 'Apio, Cereales con gluten, Huevos, Lácteos, Mostaza, Pescado, Soja', 'assets/images/productos/arrozYNoodles/Ramen_Yasai.png', TRUE, 'arroz y noodles');

INSERT INTO TIPO_PRODUCTO (nombre) VALUES ('nigiris');

INSERT INTO PRODUCTO (nombre_plato, descripcion, precio, alergenos, urlImg, disponibilidad, tipo_producto) VALUES
('Nigiri Anguila', 'Dos piezas de arroz de sushi cubiertos de filetes de anguila.', 4.90, 'CEREALES CON GLUTEN, PESCADO, SÉSAMO, SOJA Y SULFITOS', 'assets/images/productos/nigiris/Nigiri_Anguila.png', TRUE, 'nigiris'),
('Nigiri Atún Flambeado', '', 4.50, 'PESCADO Y SULFITOS', 'assets/images/productos/nigiris/Nigiri_Atun_Flambeado.png', TRUE, 'nigiris'),
('Nigiri Atún', 'Dos piezas de arroz de sushi cubiertos de filetes de atún rojo de almadraba.', 4.50, 'CRUSTÁCEOS Y SULFITOS', 'assets/images/productos/nigiris/Nigiri_Atun.png', TRUE, 'nigiris'),
('Nigiri Ebi', 'Dos piezas de arroz de sushi cubiertos de dos piezas de gambas.', 4.20, 'CRUSTÁCEOS, SULFITOS', 'assets/images/productos/nigiris/Nigiri_Ebi.png', TRUE, 'nigiris'),
('Nigiri Pez Mantequilla Flambeado', '', 4.90, 'PESCADO Y SULFITOS', 'assets/images/productos/nigiris/Nigiri_Pez_Mantequilla_Flambeado.png', TRUE, 'nigiris'),
('Nigiri Pez Mantequilla', 'Dos piezas de arroz de sushi cubiertos de filetes de pez mantequilla.', 3.90, 'PESCADO Y SULFITOS', 'assets/images/productos/nigiris/Nigiri_Pez_Mantequilla.png', TRUE, 'nigiris'),
('Nigiri Salmón flambeado', '', 4.50, 'PESCADO Y SULFITOS', 'assets/images/productos/nigiris/Nigiri_Salmon_Flambeado.png', TRUE, 'nigiris'),
('Nigiri Salmón', 'Dos piezas de arroz de sushi cubiertos de filetes de salmón', 4.50, 'PESCADO Y SULFITOS', 'assets/images/productos/nigiris/Nigiri_Salmon.png', TRUE, 'nigiris');

INSERT INTO TIPO_PRODUCTO (nombre) VALUES ('rolls');

INSERT INTO PRODUCTO (nombre_plato, descripcion, precio, alergenos, urlImg, disponibilidad, tipo_producto) VALUES
('Roll Almadraba', 'Atún en tempura con queso crema, envuelto en arroz de sushi cubierto de atún flambeado, salsa kazan y salsa teriyaki.', 10.50, 'LÁCTEOS, PESCADO, SOJA, GLUTEN, SÉSAMO', 'assets/images/productos/rolls/Almadraba_Roll.png', TRUE, 'rolls'),
('Roll Anguila', 'Anguila, aguacate y philadelphia enrollado con arroz de sushi y cubierto de cebolla frita y salsa anguila.', 9.50, 'CEREALES CON GLUTEN, LÁCTEOS, PESCADO, SÉSAMO, SOJA Y SULFITOS', 'assets/images/productos/rolls/Anguila_Roll.png', TRUE, 'rolls'),
('Roll Hawai', 'Pez mantequilla rebozado, enrollado en arroz de sushi y cubierto de salsa Japonesa, sriracha y azúcar moreno flameada.', 8.90, 'CEREALES CON GLUTEN, HUEVOS, MOSTAZA, PESCADO, SOJA Y SULFITOS', 'assets/images/productos/rolls/Hawai_Roll.png', TRUE, 'rolls'),
('Roll Kazan', 'Aguacate y salmón enrollado en arroz de sushi y cubierto de salmón flameado y salsa picante de miel y mostaza.', 9.20, 'HUEVOS, LÁCTEOS, MOSTAZA, PESCADO, SÉSAMO Y SULFITO', 'assets/images/productos/rolls/Kazan_Roll.png', TRUE, 'rolls'),
('Roll Pollo Crispy', 'Pollo crujiente y philadelphia enrollado de arroz de sushi y cubierto de salsa teriyaki.', 7.90, 'CEREALES CON GLUTEN, HUEVOS, LÁCTEOS, SÉSAMO, SOJA Y SULFITOS', 'assets/images/productos/rolls/Pollo_Crispy_Roll.png', TRUE, 'rolls'),
('Roll Street', 'Roll de pato en tempura y queso Philadelphia cubierto de cebolla en tempura y salsa street', 8.95, 'CEREALES CON GLUTEN, HUEVOS, LÁCTEOS, MOSTAZA, PESCADO, SOJA Y SULFITOS', 'assets/images/productos/rolls/Street_Roll.png', TRUE, 'rolls'),
('Roll Tropical', 'Salmón, aguacate envuelto en arroz de sushi, cubierto de mango, cacahuete y fideo kadafi crujiente.', 8.50, 'NO TIENE', 'assets/images/productos/rolls/Tropical_Roll.png', TRUE, 'rolls'),
('Roll Uramaki Atún', 'Atún cocido y philadelphia enrollado en arroz de sushi y rebozado, cubierto de cebolla crujiente y salsa Kimchi', 8.95, 'CEREALES CON GLUTEN, HUEVOS, LÁCTEOS, MOSTAZA, PESCADO, SOJA, SULFITOS', 'assets/images/productos/rolls/Uramaki_Atun_Roll.png', TRUE, 'rolls');

INSERT INTO TIPO_PRODUCTO (nombre) VALUES ('makis');

INSERT INTO PRODUCTO (nombre_plato, descripcion, precio, alergenos, urlImg, disponibilidad, tipo_producto) VALUES
('Maki Aguacate y Mango', '', 4.50, 'SULFITOS', 'assets/images/productos/maki/Maki_Aguacate_Mango.png', TRUE, 'makis'),
('Maki Aguacate', 'Arroz de sushi con aguacate envuelto en alga nori.', 5.90, 'SULFITOS', 'assets/images/productos/maki/Maki_Aguacate.png', TRUE, 'makis'),
('Maki Anguila Aguacate', '', 4.90, 'NO TIENE', 'assets/images/productos/maki/Maki_Anguila_Aguacate.png', TRUE, 'makis'),
('Maki Ebi Aguacate', 'Arroz de sushi con gambas y aguacate envuelto en alga nori.', 4.90, 'CRUSTÁCEOS Y SULFITOS', 'assets/images/productos/maki/Maki_Ebi_Aguacate.png', TRUE, 'makis'),
('Maki Pez Mantequilla Trufa', 'Arroz de sushi con pez mantequilla y trufa envuelto en alga nori.', 4.90, 'PESCADO, SULFITOS', 'assets/images/productos/maki/Maki_Pez_Mantequilla_Trufa.png', TRUE, 'makis'),
('Maki Salmón Philadelphia', 'Arroz de sushi con salmón y philadelphia envuelto en alga nori.', 5.60, 'LÁCTEOS, PESCADO Y SULFITOS', 'assets/images/productos/maki/Maki_Salmon_Philadelphia.png', TRUE, 'makis'),
('Maki Salmón', 'Arroz de sushi con salmón envuelto en alga nori.', 4.90, 'PESCADO, SULFITOS', 'assets/images/productos/maki/Maki_Salmon.png', TRUE, 'makis'),
('Maki Surimi', 'Arroz de sushi con surimi envuelto en alga nori.', 4.90, 'CRUSTÁCEOS, HUEVOS, MOLUSCOS, PESCADO Y SULFITOS', 'assets/images/productos/maki/Maki_Surimi.png', TRUE, 'makis'),
('Maki Atún', 'Arroz de sushi con atún rojo de almadraba envuelto en alga nori.', 5.90, 'PESCADO Y SULFITOS', 'assets/images/productos/maki/Maki_Atun.png', TRUE, 'makis');

INSERT INTO TIPO_PRODUCTO (nombre) VALUES ('bebidas');

INSERT INTO PRODUCTO (nombre_plato, descripcion, precio, alergenos, urlImg, disponibilidad, tipo_producto) VALUES
('Sake Tanrei', '', 4.99, 'NO TIENE', 'assets/images/productos/bebidas/Sake_Tanrei.png', TRUE, 'bebidas'),
('Sake Kakumasume', '', 19.20, 'NO TIENE', 'assets/images/productos/bebidas/Sake_Kakumasume.png', TRUE, 'bebidas'),
('Cerveza Estrella Galicia', '', 2.00, 'NO TIENE', 'assets/images/productos/bebidas/Cerveza_Estrella_Galicia_Quinto.png', TRUE, 'bebidas'),
('Cerveza Kirin Ichiban', '', 3.90, 'NO TIENE', 'assets/images/productos/bebidas/Cerveza_Kirin.png', TRUE, 'bebidas'),
('Fanta White Peach', '', 2.00, 'NO TIENE', 'assets/images/productos/bebidas/Fanta_White_Peach.png', TRUE, 'bebidas');

INSERT INTO TIPO_PRODUCTO (nombre) VALUES ('postres');

INSERT INTO PRODUCTO (nombre_plato, descripcion, precio, alergenos, urlImg, disponibilidad, tipo_producto) VALUES
('Mochi de Cheesecake', 'Pastel japonés hecho de mochigome, con sabor a tarta de queso y frutos rojos.', 4.60, 'FRUTOS SECOS, LÁCTEOS, SOJA, SULFITOS', 'assets/images/productos/postres/Mochi_De_Cheesecake.png', TRUE, 'postres'),
('Mochi de Mango', 'Pastel japonés hecho de mochigome, con sabor a mango', 4.60, 'CEREALES CON GLUTEN, FRUTOS SECOS, HUEVOS, SULFITOS', 'assets/images/productos/postres/Mochi_De_Mango.png', TRUE, 'postres'),
('Mochi de Té Matcha', '', 4.60, 'FRUTOS SECOS, LÁCTEOS, SOJA, SULFITOS', 'assets/images/productos/postres/Mochi_De_Té_Verde.png', TRUE, 'postres'),
('Tarta de Queso y Pistacho', '', 4.50, 'CEREALES CON GLUTEN, FRUTOS SECOS, HUEVOS, LÁCTEOS, PESCADO, SOJA, SULFITOS', 'assets/images/productos/postres/Tarta_De_Queso_Y_Pistachos.png', TRUE, 'postres');

INSERT INTO LOCAL (id_local, nombre, direccion, telefono, urlImg, cant_mesas) 
VALUES (1, 'Sevilla', 'Avenida de Ramón y Cajal 5', 'assets/images/inicio/sevillaeditada.jpg','954177177', 20);

INSERT INTO LOCAL (id_local, nombre, direccion, telefono, urlImg, cant_mesas) 
VALUES (2, 'Utrera', 'Avenida de María Auxiliadora 80', 'assets/images/inicio/utreraeditada.jpg', '954199199', 25);
commit;

