-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tv`
--

DROP TABLE IF EXISTS `tv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tv` (
  `productId` int DEFAULT '104',
  `tvId` int NOT NULL AUTO_INCREMENT,
  `tvName` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `screenSize` varchar(100) DEFAULT NULL,
  `resolution` varchar(100) DEFAULT NULL,
  `operatingSystem` varchar(100) DEFAULT NULL,
  `screenType` varchar(100) DEFAULT NULL,
  `thumbnail` varchar(100) DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `countInStock` int DEFAULT NULL,
  PRIMARY KEY (`tvId`)
) ENGINE=InnoDB AUTO_INCREMENT=4014 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tv`
--

LOCK TABLES `tv` WRITE;
/*!40000 ALTER TABLE `tv` DISABLE KEYS */;
INSERT INTO `tv` VALUES (104,4001,'SONY Bravia X7002G','43999.0','SONY','43 inch','Ultra HD',' Linux based','LED','1fa019b5b85f4384b474b97f0c8760f9','Supported Apps: Netflix|Prime Video|Youtube Operating System: Linux based Resolution: Ultra HD (4K) 3840 x 2160 Pixels Sound Output: 20 W Refresh Rate: 50 Hz',15),(104,4002,'SONY X74 Bravia','71000.0','SONY','50 inch','Ultra HD (4K)',' Android ','LED','897f11113be4458495419f66e417f0f5','SONY X74 Bravia 125.7 cms (50 inch) Ultra HD (4K) LED Smart Android TV  (KD-50X74) Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: Android (Google Assistant & Chromecast in-built) Resolution: Ultra HD (4K) 3840 x 2160 Pixels Sound Output: 20 W Refresh Rate: 50 Hz',2),(104,4003,'SONY X80J','68000.0','SONY','43 inch',' Ultra HD (4K)','Andriod',' LED','09d5f41818c545dbb98814376be81751',' The SONY X80J 4K Ultra HD High Dynamic Range (HDR) Smart TV lets you amplify your TV watching experience with stunning visuals, immersive sound, vibrant colours, and a large screen. With TRILUMINOS PRO technology and 4K1 HDR Processor X1, it delivers lifelike picture quality with amazing colours. This smart TV comes with an Apple AirPlay feature that allows you to stream your favourite content from your iPhone or Mac to your TV. Furthermore, its Dolby Atmos feature provides you with a theatre-like experience at home with an immersive and multi-dimensional sound.',25),(104,4004,'Mi 4A PRO ','17000.0','REDMI','32 inch','HD','Android ','LED','95e0924cc4f44c95bb3025cf131e63af',' There is no fun in watching your favourite movie or show on a TV where the display quality is poor. Now, boost the fun and watch them all in good and clear-quality on this 80 cm (32) Mi smart TV. Its HD Ready display can accentuate your viewing experience and make it better. You can even access video streaming apps on it and never run out of quality-content to watch and enjoy. It comes with 2 speakers that deliver powerful audio which lets you experience the environment of a cinema hall right in your bedroom or living room',20),(104,4005,'Mi 4X','30000.0','REDMI','43 inch',' Ultra HD','Android ','LED','8b7882d1c1e948be8455ec87c181718e',' There is no fun in watching your favourite movie or show on a TV where the display quality is poor. Now, don’t ruin the fun and watch them all in good and clear quality on this 108 cm (43) Mi smart TV. Its 4K display can accentuate your viewing experience and make it even better. You can even access video streaming apps on it and never run out of quality content to watch and enjoy. It comes with 2 speakers that deliver powerful audio which lets you experience the environment of a cinema hall right in your bedroom or living room.',20),(104,4006,'Mi Q1','60000.0','REDMI','55 inch','Ultra HD','Android ','LED','e952dbe3235045e18b223bfe9e7ebe9a','Revamp your home entertainment experience with this Mi QLED TV that comes with a plethora of cutting-end technologies and a stunning design. This home appliance features the Dolby Vision technology for stunning visuals, DTS-HD Audio for immersive sound, and a 96% Screen-to-Body Ratio for distraction-free visuals.',25),(104,4007,'TCL S65A','17000.0','TCL','32 inch','HD',' Android','LED','a763b3b22b904f569c991dc4be9b771a',' Bring home the TCL S65A Android TV, with a built-in Google Assistant, to help you control its functions with simple voice commands. Its 79.97 cm (32) screen is supported by HDR technology that helps provide bright, vivid pictures with striking colours and etched details. Additionally, it also lets you connect to the Internet so that you can stream your favourite shows with the help of Wi-Fi (2.4 GHz).',30),(104,4008,'TCL P715','33000.0','TCL','43 inch','ULTRA HD','Andriod','LED','efcc6582c153414c98531632f466d44b',' Delight your senses by watching adrenaline-packed live sports, blockbuster movies, or trending TV shows on the TCL Ultra HD (4K) LED Smart Android TV. Featuring a high resolution, this Smart TV reproduces natural colours and stunning details for an immersive viewing experience. At the same time, its Dolby Audio integrated speakers ensure 3D audio that fills the room with a wave of sound. Additionally, this Smart TV\'s inbuilt Google Assistant lets you enjoy hands-free voice control for setting reminders, getting answers to your queries, controlling smart home devices, and more with ease.',10),(104,4009,'TCL S6500','28000.0','TCL ','43 inch','Full HD','Android',' LED','13dc367e264044e88db506ba90214305','This slim and elegant TCL LED smart TV blends a striking design with an array of unique features to ensure an immersive viewing experience. Equipped with HDR technology, this smart TV offers an impressive picture quality with vivid details and bright colours. Its Dolby audio-enabled speaker provides a captivating 5.1 surround sound to enhance the audio-visual experience even further. Plus, this smart TV comes with a built-in Google Assistant so that you can control many of its functions with just your voice.',15),(104,4010,'TCL C815','78000.0','TCL','55 inch','ULTRA HD','Andriod','LED','ee054aaf27d74c0dbc7117829062d8aa',' Bring home exciting visuals and crisp natural sound with the TCL Smart TV. The QLED screen offers warm, striking images in 4K UHD. It also comes with an inbuilt Onkyo Soundbar that comes with a dedicated subwoofer for enriched sound. And, it provides access to streaming apps like Netflix, Prime Video, and so on for all your content needs.',20),(104,4011,'Nokia 80 cm ','17000.0','NOKIA','32 inch',' HD','Andriod','LED','48355707602942db9997ae597e685ffb','Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube Operating System: Android (Google Assistant & Chromecast in-built) Resolution: HD Ready 1366 x 768 Pixels Sound Output: 39 W Refresh Rate: 60 Hz',10),(104,4012,'Nokia 126 cm','38000.0','NOKIA','50 inch','HD','Andriod','LED','135059d6501a418999f22da9fda83411',' Bring home this TV from Nokia and deep-dive into a world of lifelike colours. Boasting a sleek and stunning design, this TV features Micro Dimming and a MaxBrite Display to ensure that you enjoy clear and crisp detail with vibrant colours.',10),(104,4013,'Nokia 107.9 cm','27000.0','NOKIA','43 inch','FHD','Andriod','LED','95b2f56b09ce471dbe27cf4aa108a0b9','ring home this TV from Nokia and deep-dive into a world of lifelike colours. Boasting a sleek and stunning design, this TV features Micro Dimming and a MaxBrite Display to ensure that you enjoy clear and crisp detail with vibrant colours.',10);
/*!40000 ALTER TABLE `tv` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-27 17:26:32
