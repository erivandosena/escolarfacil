// Exemplo de um controlador para operações com alunos
exports.getAlunos = (req, res) => {
    res.send('Lista de alunos');
};

exports.createAluno = (req, res) => {
    res.send('Aluno criado');
};
