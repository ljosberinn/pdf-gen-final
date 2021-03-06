-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 16, 2018 at 04:27 PM
-- Server version: 5.6.37
-- PHP Version: 5.6.36-he.0

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
--

-- --------------------------------------------------------

--
-- Table structure for table `1090_zwischenspeicher`
--

CREATE TABLE IF NOT EXISTS `1090_zwischenspeicher` (
  `day` int(10) NOT NULL,
  `created` int(10) NOT NULL,
  `startTimestamp` int(10) NOT NULL,
  `endTimestamp` int(10) NOT NULL,
  `minutesWorked` mediumint(4) NOT NULL,
  `frühstückspause` tinyint(1) NOT NULL,
  `mittagspause` tinyint(1) NOT NULL,
  `außer-haus` mediumint(4) NOT NULL,
  `kostenstelle-1` mediumint(3) NOT NULL,
  `auftragsnummer-1` int(10) NOT NULL,
  `kunde-1` varchar(255) NOT NULL,
  `leistungsart-1` mediumint(3) NOT NULL,
  `minuten-1` mediumint(4) NOT NULL,
  `anzahl-1` int(10) NOT NULL,
  `materialnummer-1` int(10) NOT NULL,
  `kostenstelle-2` mediumint(3) NOT NULL,
  `auftragsnummer-2` int(10) NOT NULL,
  `kunde-2` varchar(255) NOT NULL,
  `leistungsart-2` mediumint(3) NOT NULL,
  `minuten-2` mediumint(4) NOT NULL,
  `anzahl-2` int(10) NOT NULL,
  `materialnummer-2` int(10) NOT NULL,
  `kostenstelle-3` mediumint(3) NOT NULL,
  `auftragsnummer-3` int(10) NOT NULL,
  `kunde-3` varchar(255) NOT NULL,
  `leistungsart-3` mediumint(3) NOT NULL,
  `minuten-3` mediumint(4) NOT NULL,
  `anzahl-3` int(10) NOT NULL,
  `materialnummer-3` int(10) NOT NULL,
  `kostenstelle-4` mediumint(3) NOT NULL,
  `auftragsnummer-4` int(10) NOT NULL,
  `kunde-4` varchar(255) NOT NULL,
  `leistungsart-4` mediumint(3) NOT NULL,
  `minuten-4` mediumint(4) NOT NULL,
  `anzahl-4` int(10) NOT NULL,
  `materialnummer-4` int(10) NOT NULL,
  `kostenstelle-5` mediumint(3) NOT NULL,
  `auftragsnummer-5` int(10) NOT NULL,
  `kunde-5` varchar(255) NOT NULL,
  `leistungsart-5` mediumint(3) NOT NULL,
  `minuten-5` mediumint(4) NOT NULL,
  `anzahl-5` int(10) NOT NULL,
  `materialnummer-5` int(10) NOT NULL,
  `kostenstelle-6` mediumint(3) NOT NULL,
  `auftragsnummer-6` int(10) NOT NULL,
  `kunde-6` varchar(255) NOT NULL,
  `leistungsart-6` mediumint(3) NOT NULL,
  `minuten-6` mediumint(4) NOT NULL,
  `anzahl-6` int(10) NOT NULL,
  `materialnummer-6` int(10) NOT NULL,
  `kostenstelle-7` mediumint(3) NOT NULL,
  `auftragsnummer-7` int(10) NOT NULL,
  `kunde-7` varchar(255) NOT NULL,
  `leistungsart-7` mediumint(3) NOT NULL,
  `minuten-7` mediumint(4) NOT NULL,
  `anzahl-7` int(10) NOT NULL,
  `materialnummer-7` int(10) NOT NULL,
  `kostenstelle-8` mediumint(3) NOT NULL,
  `auftragsnummer-8` int(10) NOT NULL,
  `kunde-8` varchar(255) NOT NULL,
  `leistungsart-8` mediumint(3) NOT NULL,
  `minuten-8` mediumint(4) NOT NULL,
  `anzahl-8` int(10) NOT NULL,
  `materialnummer-8` int(10) NOT NULL,
  `kostenstelle-9` mediumint(3) NOT NULL,
  `auftragsnummer-9` int(10) NOT NULL,
  `kunde-9` varchar(255) NOT NULL,
  `leistungsart-9` mediumint(3) NOT NULL,
  `minuten-9` mediumint(4) NOT NULL,
  `anzahl-9` int(10) NOT NULL,
  `materialnummer-9` int(10) NOT NULL,
  `kostenstelle-10` mediumint(3) NOT NULL,
  `auftragsnummer-10` int(10) NOT NULL,
  `kunde-10` varchar(255) NOT NULL,
  `leistungsart-10` mediumint(3) NOT NULL,
  `minuten-10` mediumint(4) NOT NULL,
  `anzahl-10` int(10) NOT NULL,
  `materialnummer-10` int(10) NOT NULL,
  `kostenstelle-11` mediumint(3) NOT NULL,
  `auftragsnummer-11` int(10) NOT NULL,
  `kunde-11` varchar(255) NOT NULL,
  `leistungsart-11` mediumint(3) NOT NULL,
  `minuten-11` mediumint(4) NOT NULL,
  `anzahl-11` int(10) NOT NULL,
  `materialnummer-11` int(10) NOT NULL,
  `kostenstelle-12` mediumint(3) NOT NULL,
  `auftragsnummer-12` int(10) NOT NULL,
  `kunde-12` varchar(255) NOT NULL,
  `leistungsart-12` mediumint(3) NOT NULL,
  `minuten-12` mediumint(4) NOT NULL,
  `anzahl-12` int(10) NOT NULL,
  `materialnummer-12` int(10) NOT NULL,
  `kostenstelle-13` mediumint(3) NOT NULL,
  `auftragsnummer-13` int(10) NOT NULL,
  `kunde-13` varchar(255) NOT NULL,
  `leistungsart-13` mediumint(3) NOT NULL,
  `minuten-13` mediumint(4) NOT NULL,
  `anzahl-13` int(10) NOT NULL,
  `materialnummer-13` int(10) NOT NULL,
  `kostenstelle-14` mediumint(3) NOT NULL,
  `auftragsnummer-14` int(10) NOT NULL,
  `kunde-14` varchar(255) NOT NULL,
  `leistungsart-14` mediumint(3) NOT NULL,
  `minuten-14` mediumint(4) NOT NULL,
  `anzahl-14` int(10) NOT NULL,
  `materialnummer-14` int(10) NOT NULL,
  `kostenstelle-15` mediumint(3) NOT NULL,
  `auftragsnummer-15` int(10) NOT NULL,
  `kunde-15` varchar(255) NOT NULL,
  `leistungsart-15` mediumint(3) NOT NULL,
  `minuten-15` mediumint(4) NOT NULL,
  `anzahl-15` int(10) NOT NULL,
  `materialnummer-15` int(10) NOT NULL,
  `kostenstelle-16` mediumint(3) NOT NULL,
  `auftragsnummer-16` int(10) NOT NULL,
  `kunde-16` varchar(255) NOT NULL,
  `leistungsart-16` mediumint(3) NOT NULL,
  `minuten-16` mediumint(4) NOT NULL,
  `anzahl-16` int(10) NOT NULL,
  `materialnummer-16` int(10) NOT NULL,
  `kostenstelle-17` mediumint(3) NOT NULL,
  `auftragsnummer-17` int(10) NOT NULL,
  `kunde-17` varchar(255) NOT NULL,
  `leistungsart-17` mediumint(3) NOT NULL,
  `minuten-17` mediumint(4) NOT NULL,
  `anzahl-17` int(10) NOT NULL,
  `materialnummer-17` int(10) NOT NULL,
  `kostenstelle-18` mediumint(3) NOT NULL,
  `auftragsnummer-18` int(10) NOT NULL,
  `kunde-18` varchar(255) NOT NULL,
  `leistungsart-18` mediumint(3) NOT NULL,
  `minuten-18` mediumint(4) NOT NULL,
  `anzahl-18` int(10) NOT NULL,
  `materialnummer-18` int(10) NOT NULL,
  `kostenstelle-19` mediumint(3) NOT NULL,
  `auftragsnummer-19` int(10) NOT NULL,
  `kunde-19` varchar(255) NOT NULL,
  `leistungsart-19` mediumint(3) NOT NULL,
  `minuten-19` mediumint(4) NOT NULL,
  `anzahl-19` int(10) NOT NULL,
  `materialnummer-19` int(10) NOT NULL,
  `kostenstelle-20` mediumint(3) NOT NULL,
  `auftragsnummer-20` int(10) NOT NULL,
  `kunde-20` varchar(255) NOT NULL,
  `leistungsart-20` mediumint(3) NOT NULL,
  `minuten-20` mediumint(4) NOT NULL,
  `anzahl-20` int(10) NOT NULL,
  `materialnummer-20` int(10) NOT NULL,
  `kostenstelle-21` mediumint(3) NOT NULL,
  `auftragsnummer-21` int(10) NOT NULL,
  `kunde-21` varchar(255) NOT NULL,
  `leistungsart-21` mediumint(3) NOT NULL,
  `minuten-21` mediumint(4) NOT NULL,
  `anzahl-21` int(10) NOT NULL,
  `materialnummer-21` int(10) NOT NULL,
  `kostenstelle-22` mediumint(3) NOT NULL,
  `auftragsnummer-22` int(10) NOT NULL,
  `kunde-22` varchar(255) NOT NULL,
  `leistungsart-22` mediumint(3) NOT NULL,
  `minuten-22` mediumint(4) NOT NULL,
  `anzahl-22` int(10) NOT NULL,
  `materialnummer-22` int(10) NOT NULL,
  `kostenstelle-890` mediumint(3) NOT NULL DEFAULT '890',
  `leistungsart-890` mediumint(3) NOT NULL DEFAULT '998',
  `minuten-890` mediumint(3) NOT NULL,
  UNIQUE KEY `day` (`day`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
