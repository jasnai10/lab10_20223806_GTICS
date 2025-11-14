-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `practicantes` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `practicantes` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema practicantes
-- -----------------------------------------------------
USE `practicantes` ;

-- -----------------------------------------------------
-- Table `mydb`.`practicante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `practicantes`.`practicante` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(100) NULL,
  `carrera` VARCHAR(100) NULL,
  `universidad` VARCHAR(100) NULL,
  `email` VARCHAR(100) NULL,
  `pais` VARCHAR(100) NULL,
  `estado` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO practicantes.practicante
VALUES (1, 'Jair', 'telecomunicaciones', 'PUCP', 'jair@gmail.com', 'España', 'S');

INSERT INTO practicantes.practicante
VALUES (2, 'Jhon', 'informática', 'Pacífico', 'jhon@gmail.com', 'Colombia','S');

INSERT INTO practicantes.practicante
VALUES (3, 'Emilia', 'industrial', 'U. Lima', 'emilia@gmail.com', 'Estados Unidos', 'C');

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
