import axios from "axios";
import config from "../config/config.js";
import consoleError from "../utils/consoleError.util.js";

const estados = async () => {
    try {
        const response = await axios.get(`${config.endpointIBGE}/estados`);

        const estados = [];

        response.data.forEach(e => {
            const novoEstado = {
                "est_id": e.id,
                "est_sigla": e.sigla,
                "est_desc": e.nome,
            };

            estados.push(novoEstado);
        });

        estados.sort((a, b) => {
            if (a.est_desc < b.est_desc) return -1;
            if (a.est_desc > b.est_desc) return 1;
            return 0;
        });

        return estados;
    } catch (erro) {
        consoleError('Erro ao buscar dados do IBGE:', erro.message);
        throw erro;
    }
};

const estadoPorId = async (estadoId) => {
    try {
        const response = await axios.get(`${config.endpointIBGE}/estados/${estadoId}`);

        const estado = {
            "est_id": response.data.id,
            "est_sigla": response.data.sigla,
            "est_desc": response.data.nome,
        };

        return estado;
    } catch (erro) {
        consoleError('Erro ao buscar dados do IBGE:', erro.message);
        throw erro;
    }
};

const cidades = async (estadoId) => {
    try {
        const response = await axios.get(`${config.endpointIBGE}/estados/${estadoId}/municipios`);

        const cidades = [];

        response.data.forEach(e => {
            const novaCidade = {
                "cid_id": e.id,
                "cid_desc": e.nome,
                "estado": {
                    "est_sigla": e.microrregiao.mesorregiao.UF.sigla,
                    "est_desc": e.microrregiao.mesorregiao.UF.nome,
                }
            };

            cidades.push(novaCidade);
        });

        cidades.sort((a, b) => {
            if (a.cid_desc < b.cid_desc) return -1;
            if (a.cid_desc > b.cid_desc) return 1;
            return 0;
        });

        return cidades;
    } catch (erro) {
        consoleError('Erro ao buscar dados do IBGE:', erro.message);
        throw erro;
    }
};

const cidadePorId = async (cidadeId) => {
    try {
        const response = await axios.get(`${config.endpointIBGE}/municipios/${cidadeId}`);

        const cidade = {};

        if (response.data.length !== 0) {
            cidade.cid_id = response.data.id;
            cidade.cid_desc = response.data.nome;
            cidade.estado = {};
            cidade.estado.est_sigla = response.data.microrregiao.mesorregiao.UF.sigla;
            cidade.estado.est_desc = response.data.microrregiao.mesorregiao.UF.nome;
        }

        return cidade;
    } catch (erro) {
        consoleError('Erro ao buscar dados do IBGE:', erro.message);
        throw erro;
    }
};

const localidadesConsumer = {
    estados,
    estadoPorId,
    cidades,
    cidadePorId,
};

export default localidadesConsumer;