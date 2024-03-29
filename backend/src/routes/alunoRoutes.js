const express = require('express');
const AlunoController = require('../controllers/AlunoController');

const router = express.Router();
const alunoController = new AlunoController();

// GET route para listar todos os alunos
router.get('/', async (req, res) => {
    try {
        const alunos = await alunoController.listarTodos(req, res);
        if (!res.headersSent) {
            res.status(200).json(alunos);
        }
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ message: error.message });
        }
    }
});

// POST route para criar um novo aluno
router.post('/', async (req, res) => {
    try {
        const aluno = await alunoController.criar(req, res);
        if (!res.headersSent) {
            res.status(201).json(aluno);
        }
    } catch (error) {
        if (!res.headersSent) {
            res.status(400).json({ message: error.message });
        }
    }
});

// GET route para obter um aluno pelo ID
router.get('/:id', async (req, res) => {
    try {
        const aluno = await alunoController.obterPorId(req, res);
        if (!res.headersSent) {
            res.status(200).json(aluno);
        }
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ message: error.message });
        }
    }
});

// PUT route para atualizar um aluno pelo ID
router.put('/:id', async (req, res) => {
    try {
        const alunoAtualizado = await alunoController.atualizar(req, res);
        if (!res.headersSent) {
            res.status(200).json(alunoAtualizado);
        }
    } catch (error) {
        if (!res.headersSent) {
            res.status(400).json({ message: error.message });
        }
    }
});

// DELETE route para excluir um aluno pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const aluno = await alunoController.excluir(req, res);
        if (!res.headersSent) {
            res.status(204).send('Aluno excluído com sucesso.');
        }
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ message: error.message });
        }
    }
});

module.exports = router;