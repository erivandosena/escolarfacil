const express = require('express');
const alunoRoutes = require('./routes/alunoRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Rotas
app.get('/', (req, res) => {
    res.send('Hello API Escolar Fácil!');
});
app.use(express.json());
app.use('/alunos', alunoRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
