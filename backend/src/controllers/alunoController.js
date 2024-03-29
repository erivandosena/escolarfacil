const Aluno = require('../models/Aluno');

class AlunoController {
    async listarTodos(req, res) {
        try {
            const alunos = await Aluno.find();
            res.json(alunos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async obterPorId(req, res) {
        try {
            const aluno = await Aluno.findById(req.params.id);
            if (!aluno) {
                return res.status(404).json({ message: 'Aluno não encontrado' });
            }
            res.json(aluno);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async criar(req, res) {
        const aluno = new Aluno(req.body);
        try {
            const novoAluno = await aluno.save();
            res.status(201).json(novoAluno);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const alunoAtualizado = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!alunoAtualizado) {
                return res.status(404).json({ message: 'Aluno não encontrado' });
            }
            res.json(alunoAtualizado);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async excluir(req, res) {
        try {
            const aluno = await Aluno.findByIdAndDelete(req.params.id);
            if (!aluno) {
                return res.status(404).json({ message: 'Aluno não encontrado' });
            }
            res.json({ message: 'Aluno excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = AlunoController;