import BaseRepository from "./base.repository.js";

export default class CompetidorRepository extends BaseRepository {
    constructor(model) {
        super(model);
        this.nome = 'Competidor';
    }

    async buscarPorCpf(cpf) {
        try {
            const competidor = await this.model.findOne({
                where: {
                    comp_cpf: cpf
                }
            });

            return competidor;
        } catch (erro) {
            throw erro;
        }
    }

    async buscarPorCpfNasc(cpf, nasc) {
        try {
            const competidor = await this.model.findOne({
                where: {
                    comp_cpf: cpf,
                    comp_nasc: nasc
                }
            });

            return competidor;
        } catch (erro) {
            throw erro;
        }
    }

    async buscarPorEmail(email) {
        try {
            const competidor = await this.model.findOne({
                where: {
                    comp_email: email
                }
            });

            return competidor;
        } catch (erro) {
            throw erro;
        }
    }

    selecionaDadosCriar(competidor) {
        const dados = {};

        dados.comp_email = competidor.comp_email;
        dados.comp_nome = competidor.comp_nome;
        dados.comp_nome_social = competidor.comp_nome_social;
        dados.comp_cpf = competidor.comp_cpf;
        dados.comp_nasc = competidor.comp_nasc;
        dados.comp_whats = competidor.comp_whats;
        dados.comp_cidade = competidor.comp_cidade;

        return dados;
    }
}