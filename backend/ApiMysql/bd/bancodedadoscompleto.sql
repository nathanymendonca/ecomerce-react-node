CREATE DATABASE  IF NOT EXISTS `fseletro` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `fseletro`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: fseletro
-- ------------------------------------------------------
-- Server version	5.7.31

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
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'nfkjandfkj',',l,l,l,l'),(2,'nfkjandfkj',',l,l,l,l'),(3,'maria','aaaaaaaaaaaa'),(4,'maria','aaaaaaaaaaaa'),(5,'aaaa','bbbbb'),(6,'maria','aaaaaaaaaaaaaaaaaaaaa'),(7,'maria','aaaaaaaaaaaaaaaaaaaaa'),(8,'maria','bbbbbbbbbbbbb'),(9,'maria','aaaaaaaaaaaa'),(10,'Edmar','bbbbbbbbbbbbbbbb'),(11,'iiiiiiii','iiiiiiiiiiiiiii'),(12,'Edmar','segura e vai'),(13,'Edmar','segura e vai'),(14,'Edmar 2','me ajuda'),(15,'edmar 3','iiiiiiiiiiiiiii'),(16,'Brunão','eeeeeeeeeeeeeeeee');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `idpedidos` int(11) NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(100) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `nome_produto` varchar(255) NOT NULL,
  `valor_unit` decimal(8,2) DEFAULT NULL,
  `quantidade` int(11) NOT NULL,
  `valor_final` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`idpedidos`),
  KEY `idproduto` (`idpedidos`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'joão','rua7','88888','fogão',1200.00,2,2400.00),(2,'Nathany','rua 1','111111111','geladeira',750.00,2,750.00),(3,'Nathany','rua 1','111111111','geladeira',750.00,2,750.00),(4,'1','2','22','222',222.00,22,22.00),(5,'333','333','333','33',33.00,33,333.00),(6,'aaaa','aaaa','8888','aaaaa',888.00,1,8888.00),(7,'Bruno','rua c','222','lavadora',350.00,2,700.00),(8,'maria','aaaaaaa','1111111','geladeira',1200.00,1,1200.00),(9,'maria','dd','2222','dddd',1111.00,1,1111.00),(10,'Brunao','bbb','77','batata',2.00,2,4.00),(11,'Brunao','bbb','77','batata',2.00,2,4.00),(12,'Brunao','bbb','77','batata',2.00,2,4.00),(13,'Brunao','bbb','77','batata',2.00,2,4.00),(14,'eeee','ooooo','888888','ppppppp',22.00,4,88.00);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id_produto` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `preco_final` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_produto`),
  UNIQUE KEY `imagem_UNIQUE` (`imagem`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'geladeira','Geladeira Frost Free Brastemp Side Inverse 540 litros',6389.00,5019.00,'geladeira-b-540l.jpg'),(2,'geladeira','Geladeira Frost Free Brastemp branca 375 litros',2068.60,1910.90,'geladeira-b-375l.jpg'),(3,'geladeira','Geladeira e Refrigerador Samsung French Door Inox 501L Smart (wi-Fi) com FlexZone 220v',16210.60,15710.90,'Geladeira-Samsung.jpg'),(4,'fogao','Fogão 5 bocas Brastemp acendimento automático',4210.60,3595.90,'Fogao-Brastemp.jpg'),(5,'fogao','Cooktop-Elétrico 4 Bocas Vitrocerâmico Safanelli Touch 220v',4210.60,3210.00,'Cooktop.jpg'),(6,'microondas','Microondas Egg Cooker',6389.00,5019.00,'Egg-Microondas.jpg'),(7,'microondas','Microondas Philco 21L',495.60,415.90,'Microondas-Philco.jpg'),(8,'microondas','Microondas Philco 25L',595.60,475.90,'Microondas-Philco-litros.jpg'),(9,'lavadora','Tanquinho-e-Lavadoura de roupas Colomarq semi automática 10Kg',3375.60,3255.90,'Tanquinho-Colormaq.jpg'),(10,'lavadora','Lavadora de Roupas Philco Inverter 12KG',6389.00,5019.00,'Lavadora-Philco.jpg'),(11,'lavalouca','Lava Louça Brastemp Compacta 8 Serviços Prata 220V',2375.60,2255.90,'Lavalouca-Compacta-Brastemp.jpg'),(12,'lavalouca','Lava Louça Brastemp 10 Serviços Inox 110V',2975.60,2755.90,'Lavalouca-Brastemp.jpg');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendas`
--

DROP TABLE IF EXISTS `vendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendas` (
  `idvendas` int(11) NOT NULL AUTO_INCREMENT,
  `idpedidos` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  PRIMARY KEY (`idvendas`,`idpedidos`,`id_produto`),
  KEY `idpedidos` (`idpedidos`),
  KEY `id_produto` (`id_produto`),
  CONSTRAINT `vendas_ibfk_1` FOREIGN KEY (`idpedidos`) REFERENCES `pedidos` (`idpedidos`),
  CONSTRAINT `vendas_ibfk_2` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendas`
--

LOCK TABLES `vendas` WRITE;
/*!40000 ALTER TABLE `vendas` DISABLE KEYS */;
INSERT INTO `vendas` VALUES (1,1,1),(2,2,2),(3,2,3);
/*!40000 ALTER TABLE `vendas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voltagem`
--

DROP TABLE IF EXISTS `voltagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voltagem` (
  `id_voltagem` int(11) NOT NULL AUTO_INCREMENT,
  `id_categoria` int(11) DEFAULT NULL,
  `voltagem` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_voltagem`),
  KEY `id_categoria` (`id_categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voltagem`
--

LOCK TABLES `voltagem` WRITE;
/*!40000 ALTER TABLE `voltagem` DISABLE KEYS */;
INSERT INTO `voltagem` VALUES (1,1,'110'),(2,2,'110'),(3,3,'110'),(4,4,'110'),(5,5,'110'),(6,6,'110'),(7,7,'220'),(8,8,'220'),(9,9,'220'),(10,10,'220'),(11,11,'220'),(12,12,'220');
/*!40000 ALTER TABLE `voltagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'fseletro'
--

--
-- Dumping routines for database 'fseletro'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-04 17:19:44