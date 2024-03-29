const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
    matricula: String,
    nome: String
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;