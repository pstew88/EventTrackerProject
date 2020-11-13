-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema raiddb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `raiddb` ;

-- -----------------------------------------------------
-- Schema raiddb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `raiddb` DEFAULT CHARACTER SET utf8 ;
USE `raiddb` ;

-- -----------------------------------------------------
-- Table `raid`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `raid` ;

CREATE TABLE IF NOT EXISTS `raid` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO raid@localhost;
 DROP USER raid@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'raid'@'localhost' IDENTIFIED BY 'raid';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'raid'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `raid`
-- -----------------------------------------------------
START TRANSACTION;
USE `raiddb`;
INSERT INTO `raid` (`id`, `Name`) VALUES (1, 'ShirtlessGorefist');

COMMIT;
