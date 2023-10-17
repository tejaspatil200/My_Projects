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
-- Table structure for table `earphone`
--

DROP TABLE IF EXISTS `earphone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `earphone` (
  `productId` int DEFAULT '102',
  `earphoneId` int NOT NULL AUTO_INCREMENT,
  `earphoneName` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `connectivity` varchar(50) DEFAULT NULL,
  `batteryLife` varchar(50) DEFAULT NULL,
  `mic` varchar(50) DEFAULT NULL,
  `charging` varchar(50) DEFAULT NULL,
  `thumbnail` varchar(100) DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `countInStock` int DEFAULT NULL,
  PRIMARY KEY (`earphoneId`)
) ENGINE=InnoDB AUTO_INCREMENT=2014 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `earphone`
--

LOCK TABLES `earphone` WRITE;
/*!40000 ALTER TABLE `earphone` DISABLE KEYS */;
INSERT INTO `earphone` VALUES (102,2002,'boAt Rockerz 255F Pro+','1299.0','BOAT',' Bluetooth ','40 hrs','Yes','Type-C Charging','748ed63169e743fcbcba1c81ec9556e7','boAt Rockerz 255 Pro+ is a power-packed in-ear wireless neckband headphone that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with Bluetooth V5.0 for instant wireless connectivity. Its super powerful 300mAh battery provides a humongous playtime of up to 40 hours for an extended audio bliss. Its 10mm dynamic drivers help supply superior musical experience to the user with immersive sound. With our ASAP fast charge technology, you can get the headphones fully charged in just 60 minutes. It also offers resistance against water and sweat with IPX7 rated premium build. One can control the playback and calls easily via the provided multifunction controls and even summon respective smart Voice Assistant. Get ready to get enthralled by the pumped up audio and soaring vibe of Rockerz 255 Pro+',25),(102,2003,'boAt 103','999.0','BOAT',' Bluetooth ','20 hrs','Yes','Type-C charging','27408cd31bcf453f86d002cc12fd5586','Plug Into Nirvana on your boAt 103 Wireless neckband that comes equipped with Bluetooth v5.0. Via its 10mm Titanium drivers, it pumps out pure audio bliss for the listener. It offers a playtime of up to 15 hours with its powerful battery for an extended immersive experience. Its IPX4 water resistant build with a lightweight finish offers a carefree and comfortable listening experience to the user. It offers an adaptive fit and dons magnetic earbuds. One can command playback, hands-free and smart voice assistant via its easy to access integrated controls and built-in mic. The user can connect the neckband to two devices simultaneously via dual pairing',30),(102,2004,'boAt  Airdopes 402 ','1500.0','BOAT ',' Bluetooth','15 hrs','Yes','Type-C Charging| IWP Technology','f84843e83a444914bd6c7f3889c2f2b0',' Enjoy the freedom of wireless music and amp up your fitness regime by bringing home the BoAt Airdopes 402 Wireless Earbuds. Thanks to the 10 mm dynamic drivers, they provide powerful bass and immersive sound quality across any musical genre. Moreover, these wireless earbuds ensure extended usage with the charging case for uninterrupted listening wherever you go.',70),(102,2005,'SONY WH-CH510','2999.0','SONY','Bluetooth',NULL,'Yes','USB Charging','66afa843bbea4d17b7e28f8083d39710','With Mic:Yes Bluetooth version: 5.0 Wireless range: 10 m Battery life: 35 hrs | Charging time: 4.5 hrs Using simple touch controls answer phone calls. Swivel cups: Rotate the ear cups flat for easy packing Access your google assistant from your speaker',20),(102,2006,'SONY WI-C200 ','2065.0','SONY ','Bluetooth',NULL,'Yes','Type B','2379755d326d4302a4791448aa6ce235','These Sony Bluetooth Earphones, you can bid adieu to tangled wires and pulled-out plugs. With just 10 minutes of charging, you can enjoy up to 60 minutes of music playback. This means that you can enjoy listening to your favourite tunes even you’re hard-pressed for time.',20),(102,2007,'SONY WF-XB700 ','7778.0','SONY ','Battery',NULL,'Yes','USB charging','44b0a96b1261442984b26d386d29fb25',' If you are looking for a Bluetooth-enabled wireless headset, then this Sony headset is ideal for you. It features EXTRA BASS to ensure that you can enjoy powerful bass. Moreover, its IPX4 rating makes it water- and sweat-resistant so that you can workout in peace.',15),(102,2008,'Skullcandy Spoke ','2334.0','SKULLCANDY ','Bluetooth',NULL,'Yes',' USB Charging','a24fd92710ac4a1cb04793b8fc2e40d8',' Model Name Spoke Color Black Headphone Type True Wireless Inline Remote Yes Sales Package Earbuds, USB Charging Cable, User Manual Connectivity Bluetooth Headphone Design Earbud',15),(102,2009,'Skullcandy Indy Evo','7000.0','SKULLCANDY','Bluetooth',NULL,'Yes',' USB Charging ','2f49463a2f2046b180c6468526504c01','Skullcandy Indy Evo Bluetooth Headset  (Black, True Wireless)  Model Name Indy Evo Color Black Headphone Type True Wireless Inline Remote Yes Sales Package Earbuds, USB Charging Cable, User Guide Connectivity Bluetooth Headphone Design Earbud',15),(102,2010,'Skullcandy S5CSW-M725','3000.0','SKULLCANDY','Bluetooth',NULL,'No','USB Charging','5876414a305d44c0ae7412b2fe76bb4e','Skullcandy S5CSW-M725 Bluetooth without Mic Headset  (Purple, On the Ear)  Model Name S5CSW-M725 Color Purple Headphone Type On the Ear Inline Remote Yes Sales Package Headphone, USB Charging Cable, User Manual Connectivity Bluetooth Headphone Design Over the Head Product Details Deep Bass Yes With Microphone No Warranty Warranty Summary 1 Year Covered in Warranty Manufacturing Defect Not Covered in Warranty Physically Damaged',15),(102,2011,'PTron InTunes Lite Neckband','600.0','PTRON','Bluetooth',NULL,'Yes','Type-C Charging','97541ecbf02f47d28305bd0094d2336e','pTron InTunes Lite Bluetooth earphones are only about 22 grams, comfortable neckband headphones, you can wear it around your neck like a necklace, which decreases the burden on ears and brings you an ingenious storage way to carry. High-fidelity stereo sound quality with bass and Bluetooth 5.0 chip-set. These headsets are compatible with most smartphones, iPhone and Android. Up to 6 hours talk time/music time and charges I 1.5 hours. Ergonomic design allows for ultimate wearing comfort to match your active lifestyle like running, jogging, cycling, driving, camping, hiking, gym exercise, and other outdoor sports. The secure fit in-the-ear design can filter out background noise, allow you to enjoy the high-quality sound performance with super bass even you are in a noisy environment',30),(102,2012,'PTron Soundster Lite','900.0','PTRON','Bluetooth',NULL,'Yes','USB Charging','5689f7de5e174603b1412062922b9aed','Custom oversized 40mm dynamic drivers produce Hi-Fi audio producing exceptional stereo sound quality. pTron Soundster Lite passive canceling headphones reproduce your music with extended high frequencies that reach up to 20 kHz for extraordinary clarity and detail.',10),(102,2013,'PTron Basspods 581','1100.0','PTRON','Bluetooth',NULL,'Yes','USB Charging','7752d17aae4d4643b69a36c4f1c5e560',' TWS Earphones & Advanced Bluetooth: The latest Bluetooth 5.0 with TWS technology on both Bluetooth headphones, provides faster pairing, stable connection and signal transmission',10);
/*!40000 ALTER TABLE `earphone` ENABLE KEYS */;
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
