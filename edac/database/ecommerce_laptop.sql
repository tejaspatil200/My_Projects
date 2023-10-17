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
-- Table structure for table `laptop`
--

DROP TABLE IF EXISTS `laptop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `laptop` (
  `productId` int DEFAULT '103',
  `laptopId` int NOT NULL AUTO_INCREMENT,
  `laptopName` varchar(100) DEFAULT NULL,
  `ram` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `operatingSystem` varchar(100) DEFAULT NULL,
  `processor` varchar(100) DEFAULT NULL,
  `ScreenSize` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  `thumbnail` varchar(100) DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `countInStock` int DEFAULT NULL,
  PRIMARY KEY (`laptopId`)
) ENGINE=InnoDB AUTO_INCREMENT=3015 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `laptop`
--

LOCK TABLES `laptop` WRITE;
/*!40000 ALTER TABLE `laptop` DISABLE KEYS */;
INSERT INTO `laptop` VALUES (103,3002,'ASUS ROG Strix G15 ','16','ASUS','Windows 10','Ryzen 9 Octa Core','15.6 inch','103000.0','141cca21eb2e49cdbce1c1b73d92f125','edicated Graphic Memory Type GDDR6 Dedicated Graphic Memory Capacity 4 GB Processor Brand AMD Processor Name Ryzen 9 Octa Core SSD Yes SSD Capacity 1 TB RAM 16 GB RAM Type DDR4 Processor Variant R9-5900HX Clock Speed 3.3 GHz with Turbo Boost Upto 4.6 GHz Memory Slots 2 SODIMM Slot Expandable Memory Upto 32 GB Cache 16 MB Graphic Processor NVIDIA GeForce RTX 3050',20),(103,3003,'ASUS VivoBook 14','8','ASUS',' Windows 10','Ryzen 5 Hexa Core','14 inch','51000.0','ea177ebc026a41dda90aa75b8044d49a','This contemporary-looking ASUS laptop can amplify not only your productivity but your style too. It comes with a thin display, so you can get a full view of the content that you are watching without any disruption. It also comes with multiple options that allow connectivity with other compatible devices. What\'s more, it weighs light, so when it comes to carrying it in your bag, you can do so easily',30),(103,3004,'ASUS TUF Gaming F15 ','16','ASUS','Windows 10 ','Core i5 10th Gen','15.6 inch','58990.0','7eabf45ebd484a5e85038cb22b0a3e98','NVIDIA GeForce GTX 1650 15.6 inch Full HD LED Backlit, IPS Anti-Glare Display (250nits Brightness, 144 Hz Refresh Rate, 45% NTSC Color Gamut, 62.5% sRGB) Light Laptop without Optical Disk Drive Pre-installed Genuine Windows 10 OS',40),(103,3005,'HP 15s','8','HP','Windows 10 Home','Ryzen 3 Dual Core 3250U','15.6 inch','37590.0','dbc1acfe18e242cab9d9e76eb625e2c2','Stylish & Portable Thin and Light Laptop 15.6 inch Full HD LED Backlit Anti-glare IPS Micro-edge Display (250 nits Brightness, 45% NTSC Color Gamut, 141 PPI) Light Laptop without Optical Disk Drive',35),(103,3006,'HP Pavilion','8','HP ','Windows 10 Home','Ryzen 5 Hexa Core 5600H','15.6 inch','63990.0','396760ed83a644a4b55670b45f54c5a7','HP Pavilion Ryzen 5 Hexa Core 5600H - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) 15-ec2004AX Gaming Laptop  (15.6 inch, Shadow Black, 1.98 kg) NVIDIA GeForce GTX 1650 15.6 inch Full HD WLED-Backlit IPS Anti-glare Micro-edge Display (Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC) Light Laptop without Optical Disk Drive Pre-installed Genuine Windows 10 OS',10),(103,3007,'HP 14s ','8','HP','Windows 10 Home','Core i3 11th Gen','undefined','41990.0','7559747d9ccd4a16a66b7043b6cf4b04','HP 14s Core i3 11th Gen - (8 GB/256 GB SSD/Windows 10 Home) 14s- DY2501TU Thin and Light Laptop  (14 inch, Natural Silver, 1.46 kg, With MS Office) Stylish & Portable Thin and Light Laptop 14 inch Full HD WLED Backlit, IPS BrightView Micro-Edge Display (250 nits Brightness, 45% NTSC Color Gamut, 157 PPI) Light Laptop without Optical Disk Drive',20),(103,3008,'APPLE MacBook Air M1','16','APPLE','Mac OS  Catalina','Apple M1 Chip','13.3 inch','88990.0','06f823d78b024a45bb3c75acad58d4ef','APPLE MacBook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg) Stylish & Portable Thin and Light Laptop 13.3 inch Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology) Light Laptop without Optical Disk Drive',25),(103,3009,'APPLE MacBook Air','8','APPLE','Mac OS Catalina','Core i5 10th Gen','13.3 inch','99990.0','637c3609ab0d4e3688fa306c367685ca','APPLE MacBook Air Core i5 10th Gen - (8 GB/512 GB SSD/Mac OS Catalina) MVH52HN/A  (13.3 inch, Gold, 1.29 kg) Stylish & Portable Thin and Light Laptop 13.3 inch Quad HD LED Backlit IPS Retina Display (227 ppi, 16:10 Aspect Ratio, True Tone Technology) Finger Print Sensor for Faster System Access Light Laptop without Optical Disk Drive',15),(103,3010,'APPLE MacBook Pro M1','8','APPLE','Mac OS Big Sur',' Apple M1 Chip','13.3 inch','112990.0','9612ac611d054597a82bd322c746a303','APPLE MacBook Pro M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MYD82HN/A  (13.3 inch, Space Grey, 1.4 kg) Stylish & Portable Thin and Light Laptop 13.3 inch Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology) Light Laptop without Optical Disk Drive',10),(103,3012,'Lenovo IdeaPad ',NULL,'LENOVO','Windoes 10','Core i3 10th Gen','14 inch','38000.0','7bfc8f7cac7e45938e5ab1ea2ad153db','Stylish & Portable Thin and Light Laptop 14 Inch Full HD LED Backlit, Anti-Glare Display (220 nits Brightness) Light Laptop without Optical Disk Drive.  Sales Package Laptop, Power Adaptor, User Guide, Warranty Documents Model Number 14 IML 05 Part Number 81WA00GLIN/81WA00K4IN Series IdeaPad Color Platinum Grey Type Thin and Light Laptop Suitable For Processing & Multitasking Battery Backup Upto 11.5 Hours Power Supply 45W AC Adapter MS Office Provided Yes',10),(103,3013,'Lenovo E41',NULL,'LENOVO','Windows 10','APU Dual Core','14 inch','28000.0','0a50e65465f946e1baa9ef68c83710f5','14 Inch HD LED Backlit Display Light Laptop without Optical Disk Drive .  Sales Package Laptop, Charger and Manual Model Number E41-45 Part Number 82BF001DIH Series E41 Color Black Type Notebook Suitable For Processing & Multitasking, Everyday Use Battery Backup Up to 4 Hours Power Supply 45W Adapter Battery Cell 6 Cell MS Office Provided No Stylus Included No',10),(103,3014,'Lenovo ThinkPad E15 ',NULL,'LENOVO',' Windows 10',' Core i5 11th Gen','15.6 inch','73998.0','5976df5b26164999a60848378ad4cc69',' This Lenovo laptop boasts an ergonomic design that enables you to be productive even when you’re on the move. It has Owl Wing fans that prevent excessive dust and overheating from occurring. And, it offers long-lasting and uninterrupted usage with its powerful battery. This way, you can game, work, listen to music, and more with ease.',30);
/*!40000 ALTER TABLE `laptop` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-27 17:26:33
