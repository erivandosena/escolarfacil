// __tests__/models/Aluno.test.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Aluno = require('../../src/models/Aluno');

describe('Aluno model', () => {
    let mongoServer;

    beforeAll(async () => {
        const mongoServerOpts = { binary: { version: '7.0.3' } };
        mongoServer = await MongoMemoryServer.create(mongoServerOpts);
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
    }, 30000); // 30 segundos

    afterAll(async () => {
        await mongoose.disconnect();
        if (mongoServer) {
            await mongoServer.stop();
        }
    });

    it('should create and save a student successfully', async () => {
        const alunoData = { nome: 'Aluno Teste', matricula: '12345678' };
        const aluno = new Aluno(alunoData);
        const savedAluno = await aluno.save();

        expect(savedAluno.nome).toBe(alunoData.nome);

        // Limpando: remover o aluno após o teste
        await Aluno.findByIdAndDelete(savedAluno._id);
    });
});
