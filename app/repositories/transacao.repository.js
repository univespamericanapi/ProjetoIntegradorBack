import { mensagensConstant } from "../constants/mensagens.constant.js";

export default class TransacaoRepository {
    // constructor(Competidor, Apresentacao, Participacao, ApresExtra = null) {
    //     this.Competidor = Competidor;
    //     this.Apresentacao = Apresentacao;
    //     this.Participacao = Participacao;
    //     this.ApresExtra = ApresExtra;
    // }

    constructor(sequelize) {
        this.sequelize = sequelize;
    }

    async iniciar() {
        try {
            return await this.sequelize.transaction();
        } catch (erro) {
            throw erro;
        }
    }

    async buscarOuCriar(model, where, defaults, transaction) {
        try {
            return await model.findOrCreate({
                where: where,
                defaults: defaults,
                transaction
            }).then(([registro, criado]) => {
                return registro;
            });
        } catch (erro) {
            throw erro;
        }
    }

    async criar(model, data, transaction) {
        try {
            return await model.create(
                data,
                { transaction }
            )
        } catch (erro) {
            throw erro;
        }
    }

    async incrementar(registry, field, transaction) {
        try {
            await registry.increment(field, { transaction });
        } catch (erro) {
            throw erro;
        }
    }

    async finalizar (transaction) {
        try {
            await transaction.commit()
        } catch (erro) {
            transaction.rollback();
            throw erro;
        }
    }

    // async iniciar(competidor, apresentacao, participacao, concurso, apresExtra = null, sequelize) {
    //     try {
    //         const transaction = await sequelize.transaction();
    //         return await this.Competidor.model.findOrCreate({
    //             where: {
    //                 comp_cpf: competidor.comp_cpf
    //             },
    //             defaults: competidor,
    //             transaction
    //         }).then(async ([comp, compCriado]) => {
    //             apresentacao.apres_comp = comp.comp_id;
    //             return await this.Apresentacao.model.create(
    //                 apresentacao,
    //                 { transaction }
    //             ).then(async apres => {
    //                 participacao.part_apres = apres.apres_id;
    //                 return await this.Participacao.model.create(
    //                     participacao,
    //                     { transaction }
    //                 ).then(async part => {
    //                     let message;
    //                     if (apresExtra) {
    //                         apresExtra.extra_part = part.part_id;
    //                         await this.ApresExtra.model.create(
    //                             apresExtra,
    //                             { transaction }
    //                         );
    //                     }
    //                     if (part.part_tipo_inscr === "Inscrição") {
    //                         await concurso.increment({
    //                             conc_atual_inscr: 1,
    //                         }, { transaction });
    //                         message = mensagensConstant.participacaoRegistrada;
    //                     } else {
    //                         await concurso.increment({
    //                             conc_atual_espera: 1
    //                         }, { transaction });
    //                         message = mensagensConstant.vagasEncerradas;
    //                     }
    //                     await transaction.commit();
    //                     return message;
    //                 });
    //             });
    //         });
    //     } catch (erro) {
    //         transaction.rollback();
    //         throw erro;
    //     }
    // }
}