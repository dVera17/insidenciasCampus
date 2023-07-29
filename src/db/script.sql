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
    email_corp VARCHAR(60) NOT NULL,
    telef_residencia VARCHAR(60) NOT NULL,
    telef_empresa VARCHAR(60) NOT NULL,
    telef_movil_empre VARCHAR(60) NOT NULL,
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