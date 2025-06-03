-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vitokos_coffee
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  `tipo` enum('normal','premium') DEFAULT 'normal',
  `estado` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Juan Pérez','Antofagasta','normal',1),(2,'Ana Torres','La Serena','premium',1),(3,'Carlos Díaz','Copiapó','normal',1),(4,'Juan Pérez','Antofagasta','normal',1),(5,'Ana Torres','Tocoyork','premium',1),(6,'Carlos Díaz','Iquique','normal',1),(7,'Juan Pérez','Antofagasta','normal',1),(8,'Ana Torres','Tocoyork','premium',1),(9,'Carlos Díaz','Iquique','normal',1),(10,'Juan Pérez','Antofagasta','normal',1),(11,'Ana Torres','Tocoyork','premium',1),(12,'Carlos Díaz','Iquique','normal',1),(13,'Juan Pérez','Antofagasta','normal',1),(14,'Ana Torres','Tocoyork','premium',1),(15,'Carlos Díaz','Iquique','normal',1),(16,'Juan Pérez','Antofagasta','normal',1),(17,'Ana Torres','Tocoyork','premium',1),(18,'Carlos Díaz','Iquique','normal',1),(19,'Juan Pérez','Antofagasta','normal',1),(20,'Ana Torres','Tocoyork','premium',1),(21,'Carlos Díaz','Iquique','normal',1),(22,'Juan Pérez','Antofagasta','normal',1),(23,'Ana Torres','Tocoyork','premium',1),(24,'Carlos Díaz','Iquique','normal',1);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-02 23:17:27
