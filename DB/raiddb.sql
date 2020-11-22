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
  `Time_Started` DATETIME NULL,
  `Time_Ended` DATETIME NULL,
  `number_of_attendees` INT NULL,
  `number_of_tanks` INT NULL,
  `number_of_healers` INT NULL,
  `number_of_dps` INT NULL,
  `number_bosses_killed` VARCHAR(45) NULL,
  `best_item_dropped` VARCHAR(45) NULL,
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
INSERT INTO `raid` (`id`, `Name`, `Time_Started`, `Time_Ended`, `number_of_attendees`, `number_of_tanks`, `number_of_healers`, `number_of_dps`, `number_bosses_killed`, `best_item_dropped`) VALUES (1, 'ShirtlessGorefist', '2020-10-10 18:00:20', '2020-10-10 22:00:20', 20, 4, 3, 13, '6', 'Bracer of Brutality');
INSERT INTO `raid` (`id`, `Name`, `Time_Started`, `Time_Ended`, `number_of_attendees`, `number_of_tanks`, `number_of_healers`, `number_of_dps`, `number_bosses_killed`, `best_item_dropped`) VALUES (2, '14WeeksNoTear', '2020-10-10 18:00:20', '2020-10-10 22:00:20', 37, 4, 7, 19, '9', 'Drakefang Talisman');
INSERT INTO `raid` (`id`, `Name`, `Time_Started`, `Time_Ended`, `number_of_attendees`, `number_of_tanks`, `number_of_healers`, `number_of_dps`, `number_bosses_killed`, `best_item_dropped`) VALUES (3, 'CthunProgression', '2020-10-10 18:00:20', '2020-10-10 22:00:20', 40, 4, 7, 29, '6', 'Mindrender Bands');

COMMIT;
