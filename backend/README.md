# Node.js Backend Project Setup

## Preparação do ambiente de desenvolvimento local no Linux
Instalação das ferramentas de desenvolvimento:
```bash
sudo apt update
sudo apt install build-essential
```

### Usando NodeSource:
O NodeSource é um repositório que fornece as versões mais recentes do Node.js. Você pode adicionar este repositório ao seu sistema e instalar o Node.js com os comandos abaixo (exemplo para Node.js 18.x):

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```
Usando o gerenciador de pacotes do sistema:
No Debian, Ubuntu, e derivados, você pode instalar o Node.js diretamente dos repositórios oficiais com:

```bash
sudo apt update
sudo apt install nodejs
```
Para verificar a instalação, use:
```bash
node -v
npm -v
```

### Use npm ou Yarn
O npm (Node Package Manager) é instalado automaticamente com o Node.js e é usado para gerenciar as dependências do projeto. O Yarn é uma alternativa ao npm que também pode ser usado para gerenciar dependências.

Instalação do Yarn (opcional se preferir ao npm):
Para instalar o Yarn, você pode usar o npm ou configurar o repositório e instalar diretamente. Aqui está como instalar via npm:
```bash
npm install -g yarn
```

### Instalação do Git:
```bash
sudo apt update
sudo apt install git
```

## Configuração Inicial para o projeto Node
Considerando o sistema Operacional Linux e Node já instalado, primeiro, crie a estrutura básica do projeto e instale as dependências necessárias:

```bash
mkdir backend
cd backend

yarn init -y
yarn add express

yarn add -D nodemon eslint prettier

yarn add dotenv mongoose helmet cors

mkdir -p src/{app,config,controllers,middlewares,models,routes,utils}
touch src/index.js src/app/app.js src/config/config.js src/controllers/alunoController.js src/middlewares/errorHandler.js src/models/alunoModel.js src/routes/alunoRoutes.js src/utils/utilities.js
```

## Arquivos do Projeto
`src/index.js`
Ponto de entrada da aplicação, configura e inicia o servidor Express.
```javascript
const express = require('express');
const alunoRoutes = require('./routes/alunoRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo(a) ao servidor backend!');
});

app.use(express.json());
app.use('/alunos', alunoRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

`src/app/app.js`
Configuração centralizada do Express (opcionalmente utilizado para maior modularidade).
```javascript
const express = require('express');
const app = express();

app.use(express.json());

module.exports = app;
```

`src/config/config.js`
Configurações da aplicação, como strings de conexão de banco de dados, portas, etc.
```javascript
module.exports = {
    dbUrl: 'mongodb://localhost:27017/db',
    port: 3000
};
```

`src/models/alunoModel.js`
Modelo do aluno, usando Mongoose.
```javascript
const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    turma: String
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;
```

`src/routes/alunoRoutes.js`
Rotas para o recurso 'aluno'.
```javascript
const express = require('express');
const alunoController = require('../controllers/alunoController');

const router = express.Router();

router.get('/', alunoController.getAlunos);
router.post('/', alunoController.createAluno);

module.exports = router;
```

`src/controllers/alunoController.js`
Lógica do controlador para o recurso 'aluno'.
```javascript
exports.getAlunos = (req, res) => {
    res.send('Lista de alunos');
};

exports.createAluno = (req, res) => {
    res.send('Aluno criado');
};
```

`src/middlewares/errorHandler.js`
Middleware para tratamento de erros.
```javascript
module.exports = (err, req, res, next) => {
    console.error(err);
    res.status(500).send('Ocorreu um erro interno');
};
```

`src/utils/utilities.js`
Funções utilitárias que podem ser reutilizadas em várias partes do código.
```javascript
exports.sayHello = (name) => `Hello, ${name}!`;
```

## Configuração do Nodemon
Crie um arquivo nodemon.json na raiz do projeto:
```bach
touch nodemon.json
```
```json
{
  "watch": ["src"],
  "ext": "js",
  "ignore": ["src/**/*.test.js"],
  "exec": "node src/index.js"
}
```

## Adição de scripts no package.json
Adicione os seguintes scripts para facilitar a execução e o desenvolvimento:
```json
"scripts": {
    "start": "node src/index.js",
    "dev": "nodemon"
}
```

## Execução do Projeto
Para desenvolvimento, use:
```bash
yarn dev
```

Para produção, use:
```bash
yarn start
```

## Teste da API
Acesse [http://localhost:3000](http://localhost:3000) para verificar se o servidor está executando corretamente.
