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
-- Table structure for table `mobile`
--

DROP TABLE IF EXISTS `mobile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mobile` (
  `productId` int DEFAULT '101',
  `mobileId` int NOT NULL AUTO_INCREMENT,
  `mobileName` varchar(100) DEFAULT NULL,
  `ram` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `battery` varchar(100) DEFAULT NULL,
  `primaryCamera` varchar(100) DEFAULT NULL,
  `screenResolution` varchar(100) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `thumbnail` varchar(100) DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `countInStock` int DEFAULT NULL,
  PRIMARY KEY (`mobileId`)
) ENGINE=InnoDB AUTO_INCREMENT=1013 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobile`
--

LOCK TABLES `mobile` WRITE;
/*!40000 ALTER TABLE `mobile` DISABLE KEYS */;
INSERT INTO `mobile` VALUES (101,1001,'Samsung Galaxy M20s','4GB','SAMSUNG ','5000mah','48MP','FHD',12000,'397063dd6c52494b96e77712a02a7c46','The Samsung Galaxy M20 64GB comes with a 6.3-inch TFT display having a screen resolution of 1,080 x 2,340 pixels and a sharp density of 409 PPI. The screen comes with a complete bezel-less finish and a water-drop notch on top hence can serve as a wide viewing panel. Under the hood, it is configured with Exynos 7 Octa 7904 chipset on which the octa-core processor runs at a speed of 1.8GHz. It can deliver a great performance together and it is further assisted by the Mali-G71 MP2 GPU that will look after the graphics of the device. The massive 4GB RAM will ensure there will be no lagging issue in the device. The Samsung Galaxy M20 64GB comes with an amazing camera having 13MP + 5MP lenses, which can capture very good pictures and is assisted by the f1.9 aperture that allows light to give a bright effect. At the front, there is an 8MP lens that can click equally good selfies and is assisted by screen flash.',50),(101,1002,'Samsung  M31','8GB','SAMSUNG  ','6000mAh','64MP','FHD+',16500,'e13f86bb873b4d4ea57cfa193f5c8471','64MP + 8MP + 5MP + 5MP rear camera | 32MP front facing camera 16.21 centimeters (6.4-inch) FHD+ capacitive touchscreen with 2340 x 1080 pixels resolution, 404 ppi pixel density and 16M color support Memory, Storage & SIM: 6GB RAM | 64GB storage expandable up to 512GB | Dual SIM with dual standby (4G+4G) Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor 6000mAH lithium-ion battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase Box also includes: Travel Adapter, USB Cable, Ejection Pin, User Manual Fast face unlock and fingerprint sensor | Dual SIM (nano+nano) with dual standby and dual VoLTE , Dedicated Sim slot;Widevine L1 certification for HD streaming',50),(101,1003,'Samsung Galaxy F62','6GB','SAMSUNG  ','7000mAh','64MP','FHD+',21000,'e9837007cb5c4785be68f0d04c75376c','Designed to impress you with its speed, the Samsung Galaxy F62 smartphone takes your gaming sessions to the next level with its powerful Mali G76 GPU that includes a game booster. You can enjoy the visuals in your game and spot your enemies with accuracy on this smartphone’s stellar 16.95 cm (6.7) FHD+ sAMOLED+ Infinity-O display. Equipped with a massive 7000 mAh battery, this smartphone allows you to take photos, connect with friends on various social media platforms, and do much more throughout the day. Lastly, this smartphone features a stylish Laser Gradient design and a sleek build which will surely fetch you admiring glances from your friends.',50),(101,1004,'Redmi Note 10T','6GB','REDMI','5000mAh','48MP','HD',15800,'1e7e2a9094014369a74c0076878a0818','4 GB RAM | 64 GB ROM 16.51 cm (6.5 inch) Full HD+ Display 48MP + 2MP + 2MP | 8MP Front Camera 5000 mAh Battery MediaTek Dimensity 700 Processor',50),(101,1005,'REDMI Note 10S ','6 GB','REDMI','5000 mAh','64MP','Full HD+',14990,'febd3ebe04954d97aba87622f46b4e91','6 GB RAM | 64 GB ROM 16.33 cm (6.43 inch) Full HD+ Display 64MP + 8MP + 2MP + 2MP | 13MP Front Camera 5000 mAh Battery MediaTek Helio G95 Processor',50),(101,1006,'REDMI Note 9 ','6GB','REDMI','5020 mAh','48MP',' Full HD+',14000,'dd23eebe6b0548ee8bcebb098826c85d','6 GB RAM | 128 GB ROM | Expandable Upto 512 GB 16.59 cm (6.53 inch) Full HD+ Display 48MP + 8MP + 2MP + 2MP | 13MP Front Camera 5020 mAh Battery MediaTek Helio G85 Processor',50),(101,1007,'OnePlus 9 5G',' 8GB','ONEPLUS','4500 mAh','48MP','Fluid AMOLED',50000,'2f1c17aea161421e982730edaff2ae7f','Rear Triple Camera Co-Developed by Hasselblad, 48 MP Main camera, 50 MP Ultra Wide Angle Camera with Free Form Lens, 2 MP Monochorme Lens. Also comes with a 16 MP Front Camera Qualcomm Snapdragon 888 Processor with Adreno 660 GPU 6.55 Inches Fluid AMOLED Display with 120Hz refresh rate OnePlus Oxygen OS based on Andriod 11 Comes with 4500 mAh Battery with 65W Wired Charging',50),(101,1008,'OnePlus 9R','8 GB','ONEPLUS ','4500 mAh','48MP','Fluid AMOLED',39994,'68b65994d6bf4543b0b42b32b981f120','Qualcomm Snapdragon 870 5G with upgraded Qualcomm Kryo 585 CPU that performs intense mobile computing at up to 3.2 GHz and also comes with an ultra-fast Qualcomm Adreno 650 GPU for superb on-device experiences Loaded with Quad rear camera module that features a 48 MP Main camera, 16 MP Ultra Wide angle Camera, 5 MP Macro camera and a 2 MP Monochrome camera. The device also comes with a 16 MP front Camera 6.55 Inches Fluid AMOLED display with 120 Hz of Refresh rate A Powerful 4500 mAh with 65 Watt Warp charging capability',50),(101,1009,'OnePlus Nord 5G','8 GB','ONEPLUS ','4115mAH','48MP','Fluid AMOLED',45000,'82a3219200c84286a3692e1d72354a0c','48MP+8MP+5MP+2MP quad rear camera with 1080P Video at 30/60 fps, 4k 30fps | 32MP+8MP front dual camera with 4K video capture at 30/60 fps and 1080 video capture at 30/60 fps 6.44-inch 90Hz fluid Amoled display with 2400 x 1080 pixels resolution | 408ppi Memory, Storage & SIM: 8GB RAM | 128GB internal memory | Dual SIM (nano+nano) | OnePlus Nord currently support dual 4G SIM Cards or a Single 5G SIM. 5G+4G support will be available via OTA update at a future date.',50),(101,1010,'Realme 8','4GB','REALME','3000 mAh','48 MP','HD',14000,'560b4c5ba9eb4fdc8809368ac5cd0e31',' The realme 8 5G is a visual treat with its slim and lightweight design. Thanks to its slim construction, you can comfortably hold it. Its 16.5 cm (6.5) FHD+ Display and fast refresh rate, you can enjoy delightful and smooth visuals while streaming content, gaming, and so on. And, with an instant side-fingerprint sensor, you can unlock your device in an instant.',10),(101,1011,'Realme C21','4 GB','REALME ','4500 mAh','48 MP','HD',9500,'7c7b5a0726534b7fb72197348e66bb4d','he realme C21 features a 5000 mAh powerful battery to enable you to use it for movie streaming, reading, gaming, and more for long hours without low-battery interruptions. With its Chroma Boost feature, your pictures will look breathtaking as their colours will be more vibrant and enhanced. And, this mobile phone has undergone stringent testing measures and also features the TUV Rheinland Smartphone High Credibility Certification to ensure that you get to enjoy a high-quality experience while using your smartphone.',30),(101,1012,'Realme Narzo 30A','3 GB','REALME','5000 mAh','32 MP','HD',9000,'2d862d7f6227473faccaa702980a36d2',' The Realme Narzo 30A is not just a sight to behold but also comes equipped with innovative features that will keep you productive and entertained. Its Helio G85 Gaming Processor ensures that you stay on top of the leaderboard while gaming. Its 16.5 cm (6.5) Mini-drop Fullscreen ensures an immersive experience while gaming, streaming content, and more. And, its 13 MP Primary Camera will help you take high-resolution photos in clear detail. This way, you can capture the beauty all around you.',10);
/*!40000 ALTER TABLE `mobile` ENABLE KEYS */;
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
