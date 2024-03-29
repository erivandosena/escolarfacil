// __tests__/controllers/AlunoController.test.js
const AlunoController = require('../../src/controllers/AlunoController');
const Aluno = require('../../src/models/Aluno');

jest.mock('../../src/models/Aluno');

describe('AlunoController', () => {
    const alunoController = new AlunoController();

    describe('listarTodos', () => {
        it('should list all students', async () => {
            const mockAlunos = [{ nome: 'Teste', matricula: '12345' }];
            Aluno.find.mockResolvedValue(mockAlunos);

            const req = {};
            const res = { json: jest.fn() };

            await alunoController.listarTodos(req, res);

            expect(res.json).toHaveBeenCalledWith(mockAlunos);
        });
    });

    // Mais testes para os outros métodos
});
