CREATE DATABASE insidencias;

USE insidencias;

CREATE TABLE tipo_area(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL
);

CREATE TABLE area(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    id_tipo_area INT NOT NULL,
    Foreign Key (id_tipo_area) REFERENCES tipo_area(id)
);

CREATE TABLE tipo_dispositivo(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL
);

CREATE TABLE dispositivo(
    id INT PRIMARY KEY NOT NULL,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    id_tipo_dispositivo INT NOT NULL,
    id_area INT NOT NULL,
    Foreign Key (id_tipo_dispositivo) REFERENCES tipo_dispositivo(id),
    Foreign Key (id_area) REFERENCES area(id)
);

CREATE TABLE trainer(
    cedula BIGINT PRIMARY KEY NOT NULL,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE datos_contacto(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email_personal VARCHAR(60) NOT NULL,
    email_corp VARCHAR(60) NOT NULL DEFAULT "email@gmail.com",
    telef_residencia VARCHAR(20) NOT NULL,
    telef_empresa VARCHAR(20) NOT NULL DEFAULT "3232323223",
    telef_movil_empre VARCHAR(20) NOT NULL,
    cedula_trainer BIGINT NOT NULL,
    Foreign Key (cedula_trainer) REFERENCES trainer(cedula)
);

CREATE TABLE tipo_insidencia(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL
);

CREATE TABLE categoria(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(12) NOT NULL
);

CREATE TABLE insidencia(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(300) NOT NULL,
    fecha_reporte TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    id_categoria INT NOT NULL,
    id_tipo_insidencia INT NOT NULL,
    id_area INT NOT NULL,
    cedula_trainer BIGINT NOT NULL,
    Foreign Key (id_categoria) REFERENCES categoria(id),
    Foreign Key (id_tipo_insidencia) REFERENCES tipo_insidencia(id),
    Foreign Key (id_area) REFERENCES area(id),
    Foreign Key (cedula_trainer) REFERENCES trainer(cedula)
);

INSERT INTO tipo_area(nombre) VALUES ('training'), ('review1'), ('review2');

INSERT INTO area(nombre, id_tipo_area) VALUES('apolo', 1), ('artemis', 1), ('sputnik', 1), ('skylab', 1), ('corvus', 2), ('endor', 3);

INSERT INTO tipo_dispositivo(nombre) VALUES('computador'), ('teclados'), ('mouse'), ('diademas');

INSERT INTO categoria(nombre) VALUES('hardware'), ('software');

INSERT INTO tipo_insidencia(nombre) VALUES('leve'), ('moderada'), ('critica');
