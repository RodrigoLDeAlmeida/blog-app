## 🛠 Tecnologias Utilizadas

Este projeto utiliza um conjunto robusto e moderno de tecnologias para construir um blog full-stack completo, conforme apresentado no tutorial do Lama Dev:

### Frontend
- **React** – Biblioteca JavaScript para construir interfaces de usuário dinâmicas e reativas. :contentReference[oaicite:0]{index=0}  
- **React Router Dom (v6.4)** – Facilita a navegação entre páginas dentro da aplicação React. :contentReference[oaicite:1]{index=1}  
- **React Context API** – Gerenciamento de estado para autenticação de usuário (login e logout). :contentReference[oaicite:2]{index=2}  
- **Fetch API** – Requisições HTTP para comunicação com o backend (busca de posts, dados de usuário, etc.). :contentReference[oaicite:3]{index=3}  
- **Upload de Arquivos** – Envio de imagens para o servidor a partir da interface React. :contentReference[oaicite:4]{index=4}  

### Backend
- **Node.js** – Ambiente de execução JavaScript no servidor para lógica de backend. :contentReference[oaicite:5]{index=5}  
- **Express.js** – Framework para criação de APIs RESTful e roteamento HTTP. :contentReference[oaicite:6]{index=6}  
- **MySQL** – Banco de dados relacional para armazenamento de usuários, posts, etc. :contentReference[oaicite:7]{index=7}  
- **MySQL Workbench** – Ferramenta visual para modelagem e gerenciamento do banco de dados. :contentReference[oaicite:8]{index=8}  
- **JWT (JSON Web Token)** – Autenticação baseada em token para controlar o acesso de usuários. :contentReference[oaicite:9]{index=9}  
- **Cookies** – Armazenam os tokens de autenticação no cliente (navegador). :contentReference[oaicite:10]{index=10}  
- **JOINs em SQL** – Consultas sofisticadas no banco de dados para funcionalidades como "posts recomendados". :contentReference[oaicite:11]{index=11}  

### Fluxo Completo (Full‑Stack)
- Comunicação entre frontend e backend via **CRUD** (Create, Read, Update, Delete) — criação, leitura, atualização e exclusão de posts. :contentReference[oaicite:12]{index=12}  
- **Autorização** no backend — verificação de JWT para proteger rotas sensíveis. :contentReference[oaicite:13]{index=13}  
- Recomendação de posts — backend faz consultas JOIN para selecionar posts relacionados à exibição. :contentReference[oaicite:14]{index=14}  

---

##  Visão Geral das Tecnologias

| Parte        | Tecnologias Principais                                        |
|--------------|---------------------------------------------------------------|
| **Frontend** | React, React Router 6.4, React Context API, Fetch, Upload de arquivos |
| **Backend**  | Node.js, Express, MySQL, MySQL Workbench, JWT, Cookies, JOINs SQL |
| **Integração** | Comunicação API via CRUD, autenticação e autorização, recomendações |

##  Instalação

### Instalar Dependências

1. Backend (API) - Entre na pasta api e instale as dependências:

```
cd api
npm install
```

2. Frontend (Client) - Volte para a raiz do projeto e entre na pasta client:

```
cd ../client
npm install
```

### Configurar o Banco de Dados

3. O projeto utiliza o MySQL. Crie um banco de dados chamado blog e configure as credenciais. ( default root root):

```
CREATE DATABASE `blog` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `desc` varchar(1000) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `uid` int NOT NULL,
  `cat` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid_idx` (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

5. Rodar o Backend - No diretório api, inicie o servidor:

```
cd ../api
npm start
```

5. Rodar o Frontend - No diretório client, inicie o servidor:

```
cd ../client
npm start
```
