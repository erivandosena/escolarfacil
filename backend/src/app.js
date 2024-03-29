// Dependências necessárias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Importação das rotas
const alunoRoutes = require('./routes/alunoRoutes');

// Dependências Swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const port = process.env.PORT || 3000;

// OpenAPI YAML
const swaggerDocument = YAML.load('./docs/openapi.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware para analisar o corpo da solicitação
app.use(express.json());

// Middleware para requisições de origens diferentes
app.use(cors());

// Importando a função de Conexão MongoDB
const connectDB = require('./config/database');
connectDB();

// Arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal que serve o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rotas para usar o prefixo '/api'
app.use('/api/alunos', alunoRoutes);

// Inicialização do Servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;