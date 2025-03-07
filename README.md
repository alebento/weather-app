# Frontend - Weather App

Este repositório contém o código-fonte do frontend da aplicação Weather App, que exibe a previsão do tempo com base na localização do usuário ou da cidade de entrada. O projeto foi desenvolvido utilizando **React**, **Redux** para gerenciamento de estado e integração com a API do backend. Desenvolvido por: Alexandre Bento Pereira

---

## 🚀 Tecnologias Utilizadas
- **React** (Vite)
- **Redux Toolkit**
- **Axios**
- **React Router**
- **Geolocation API**
- **CSS Modules** (para estilização)
- **Docker & Docker Compose**
- **NGINX** (para servir o frontend em produção)

---

## 📂 Estrutura do Projeto

```
frontend/
│── public/                # Arquivos públicos (favicon, index.html, etc.)
│── src/
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas da aplicação (Home, Login, Register, etc.)
│   ├── redux/             # Gerenciamento de estado com Redux Toolkit
│   ├── api/               # Chamadas à API
│   ├── App.js             # Componente principal da aplicação
│   ├── main.jsx           # Arquivo de entrada do React
│── docker-compose.yml     # Configuração do Docker Compose
│── nginx.conf             # Configuração do Nginx
│── vite.config.js         # Configuração do Vite
│── Dockerfile             # Configuração para rodar o frontend no Docker
│── package.json           # Dependências e scripts npm
│── README.md              # Documentação do projeto
```

---

## 🔧 Configuração e Execução

### ✅ 1. Rodando Localmente (Sem Docker)

### 📌 **Pré-requisitos**
Antes de iniciar, certifique-se de ter instalado:
- **Node.js** (versão 16+ recomendada)
- **NPM** ou **Yarn**

### **Instalação**
1. Clone o repositório e navegue até o diretório do frontend:
   ```sh
   git clone https://github.com/seu-repositorio/frontend-weather-app.git
   cd frontend-weather-app
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

### **Executando o Servidor de Desenvolvimento**
```sh
npm run dev
```
Por padrão, a aplicação será iniciada em `http://localhost:5173`.

---

### 🐳 2. Rodando com Docker

### **Requisitos:**
- **Docker** e **Docker Compose** instalados

### **Executando o Frontend com Docker**
```sh
docker-compose up --build -d
```
A aplicação será acessível via `http://localhost:3000`.

---


## 🔄 Atualizando e Parando os Containers
Para reconstruir o container após alguma alteração:
```sh
docker-compose up --build -d
```
Para parar os containers:
```sh
docker-compose down
```

---

### **🚀 Rodando os testes**
- Testes
```sh
   npm run test
   ```

- Cobertura dos testes
```sh
   npm run test:coverage
   ```

---

## 📜 Licença
Este projeto está sob a licença **MIT**.

---
