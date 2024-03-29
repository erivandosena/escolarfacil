const mongoose = require('mongoose');

class Aluno {
    constructor() {
        const schema = new mongoose.Schema({
            matricula: String,
            nome: String,
            turma: String,
            curso: String,
            turno: String,
            sexo: String,
            nascimento: Date,
            nacionalidade: String,
            naturalidade: String,
            religiao: String,
            endereco: {
                rua: String,
                numero: String,
                complemento: String,
                bairro: String,
                cidade: String,
                estado: String,
                cep: String
            },
            telefone: String,
            email: String,
            identidade: String,
            cpf: String,
            colegioOrigem: {
                nome: String,
                cidade: String,
                estado: String,
                telefone: String
            },
            dadosSaude: {
                problemasSaude: String,
                remediosProibidos: String,
                planoSaude: String,
                telefoneEmergencia: String,
                procedimentosEmergencia: String,
                tipoSangue: String,
                fatorRh: String,
                nomeMedico: String,
                telefoneMedico: String
            },
            dadosPai: {
                nome: String,
                vivo: Boolean,
                trabalho: {
                    local: String,
                    endereco: String,
                    profissao: String,
                    graduacao: String,
                    telefone: String
                }
            },
            dadosMae: {
                nome: String,
                viva: Boolean,
                trabalho: {
                    local: String,
                    endereco: String,
                    profissao: String,
                    graduacao: String,
                    telefone: String
                }
            },
            dadosResponsavel: {
                nome: String,
                cpf: String,
                trabalho: {
                    local: String,
                    endereco: String,
                    profissao: String,
                    graduacao: String,
                    orgao: String,
                    uf: String,
                    telefoneTrabalho: String,
                    ramal: String
                },
                enderecoResidencial: {
                    rua: String,
                    numero: String,
                    complemento: String,
                    bairro: String,
                    cidade: String,
                    estado: String,
                    cep: String
                },
                telefone: String,
                celular: String
            }
        });
        this.model = mongoose.model('Aluno', schema);
    }

    async create(data) {
        const aluno = new this.model(data);
        return await aluno.save();
    }

    // Outros métodos para lidar com as operações do CRUD
}

module.exports = new Aluno().model;
