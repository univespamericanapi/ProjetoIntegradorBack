import { concursosConstant } from '../constants/listas.constant.js';
import db from '../models/db.model.js';
import CategoriaRepository from '../repositories/categoria.repository.js';
import CosplayCircuitoRepository from '../repositories/cosp_circ.repository.js';
import CosplayDesfileRepository from '../repositories/cosp_desf.repository.js';
import EstiloRepository from '../repositories/estilo.repository.js';
import KpopCircuitoRepository from '../repositories/kpop_circ.repository.js';
import KpopSoloDuoRepository from '../repositories/kpop_solo.repository.js';
import ModalidadeRepository from '../repositories/modalidade.repository.js';
import verifica from './verificacao.util.js';

const selecionaExtra = async (concurso, extra) => {
    try {
        switch (concurso) {
            case concursosConstant[0]:
                verifica.extraCospCirc(extra);
                const Estilo = new EstiloRepository(db.estilo);
                const estilo = await Estilo.buscarPorId(extra.extra_estil);
                verifica.registroExiste(estilo, "Estilo");
                return new CosplayCircuitoRepository(db.cospCirc);

            case concursosConstant[1]:
                verifica.extraCospDesf(extra);
                const Categoria = new CategoriaRepository(db.categoria);
                const categoria = await Categoria.buscarPorId(extra.extra_categ);
                verifica.registroExiste(categoria, "Categoria");
                return new CosplayDesfileRepository(db.cospDesf);

            case concursosConstant[3]:
                verifica.extraKpopCirc(extra);
                return new KpopCircuitoRepository(db.kpopCirc);

            case concursosConstant[4]:
                verifica.extraKpopSolo(extra);
                const Modalidade = new ModalidadeRepository(db.modalidade);
                const modalidade = await Modalidade.buscarPorId(extra.extra_mod);
                verifica.registroExiste(modalidade, "Modalidade");
                return new KpopSoloDuoRepository(db.kpopSolo);

            default:
                break;
        }
    } catch (erro) {
        console.error(erro);
        throw erro;
    }
};

export default selecionaExtra;