-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema musicdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema musicdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `musicdb` DEFAULT CHARACTER SET utf8 ;
USE `musicdb` ;

-- -----------------------------------------------------
-- Table `musicdb`.`music`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `musicdb`.`music` ;

CREATE TABLE IF NOT EXISTS `musicdb`.`music` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL DEFAULT NULL,
  `release_date` DATETIME NULL DEFAULT NULL,
  `artist` VARCHAR(45) NULL DEFAULT NULL,
  `price` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `musicdb`.`music`
-- -----------------------------------------------------
START TRANSACTION;
USE `musicdb`;
INSERT INTO `musicdb`.`music` (`id`, `title`, `release_date`, `artist`, `price`) VALUES (1, 'Digital Love', '2001-06-11', 'Daft Punk', '$1.99');
INSERT INTO `musicdb`.`music` (`id`, `title`, `release_date`, `artist`, `price`) VALUES (2, 'Canned Heat', '1999-05-21', 'Jamiroquai', '$0.99');
INSERT INTO `musicdb`.`music` (`id`, `title`, `release_date`, `artist`, `price`) VALUES (3, 'Daddy', '2016-09-16', 'Die Antwoord', '$2.99');
INSERT INTO `musicdb`.`music` (`id`, `title`, `release_date`, `artist`, `price`) VALUES (4, 'Poison', '1989-02-24', 'Bell Biv DeVoe', '$0.99');
INSERT INTO `musicdb`.`music` (`id`, `title`, `release_date`, `artist`, `price`) VALUES (5, 'The Metal', '2001-09-25', 'Tenacious D', '$1.99');

COMMIT;
