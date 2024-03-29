// __tests__/routes/alunoRoutes.test.js
const request = require('supertest');
const express = require('express');
const alunoRoutes = require('../../src/routes/alunoRoutes');
const Aluno = require('../../src/models/Aluno');

const app = express();
app.use(express.json());
app.use('/alunos', alunoRoutes);

jest.mock('../../src/models/Aluno');

describe('alunoRoutes', () => {
    it('GET /alunos should return all students', async () => {
        Aluno.find.mockResolvedValue([{ nome: 'Teste', matricula: '12345' }]);

        const response = await request(app).get('/alunos');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([{ nome: 'Teste', matricula: '12345' }]);
    });

    // Similar structure for POST, GET/:id, PUT/:id, DELETE/:id
});
