import { coresLog } from "../../constants/coresLog.constant.js";
import db from "../../models/db.model.js";
import CompetidorRepository from "../../repositories/competidor.repository.js";
import ConcursoRepository from "../../repositories/concurso.repository.js";
import cadastroParticipanteService from "../../services/cadastroParticipante.service.js";
import concursoService from "../../services/concurso.service.js";
import eventoService from "../../services/evento.service.js";
import consoleError from '../../utils/consoleError.util.js';

const competidorSeeder = async () => {
    console.log(`${coresLog.FgYellow}Criando fake data...${coresLog.Reset}`);
    try {
        const evento = {
            event_nome: "Campinas Anime Fest",
            event_local: "Liceu Salesiano",
            event_edicao: 30,
            event_cidade: 3509502,
            event_data: "10/12/2023"
        }
        await eventoService.criar(evento);

        const Concurso = new ConcursoRepository(db.concurso);
        const concursos = [];

        for (let i = 1; i <= 5; i++) {
            const concurso = await Concurso.buscarPorId(i);
            await concursoService.atualizar(i, {
                "conc_limit_inscr": 30,
                "conc_limit_espera": 30,
                "conc_limit_checkin": 30,
                "conc_ativo": true,
                "conc_data_ativ": "2023-12-01"
            });
            concursos.push({
                conc_id: concurso.conc_id,
                conc_nome: concurso.conc_nome,
            });
        }

        for (const inscricao of dados) {
            const competidor = criaCompetidor(
                inscricao.comp_email,
                inscricao.comp_nome,
                inscricao.comp_nome_social,
                inscricao.comp_cpf,
                inscricao.comp_nasc,
                inscricao.comp_whats,
                inscricao.comp_cidade
            );
            const apresentacao = criaApresentacao(
                inscricao.apres_nome,
                inscricao.apres_origem,
                inscricao.apres_link_ref
            );
            const participacao = criaParticipacao(
                concursos.find((element) => element.conc_nome === inscricao.part_conc_nome).conc_id,
                inscricao.part_event,
                inscricao.part_checkin,
                inscricao.part_tipo_inscr
            );
            const extra = criaExtra(
                inscricao.extra_integ,
                inscricao.extra_estil,
                inscricao.extra_link_av,
                inscricao.extra_categ,
                inscricao.extra_mat,
                inscricao.extra_mod
            );

            await cadastroParticipanteService.criar(
                competidor,
                apresentacao,
                participacao,
                extra,
                false
            );

            const Competidor = new CompetidorRepository(db.competidor);
            const competidorCadastrado = await Competidor.buscarPorCpf(inscricao.comp_cpf);
            await Competidor.atualizarPorId(competidorCadastrado.comp_id, { comp_email_verif: true });
            process.stdout.write('█');
        }
    } catch (error) {
        consoleError(error);
        throw error;
    }
    console.log();
    console.log(`${coresLog.FgGreen}Fake data criada!${coresLog.Reset}`);
}

const criaCompetidor = (email, nome, nomeSocial, cpf, dataNasc, whats, cidade) => {
    return {
        comp_email: email,
        comp_nome: nome,
        comp_nome_social: nomeSocial,
        comp_cpf: cpf,
        comp_nasc: dataNasc,
        comp_whats: whats,
        comp_cidade: cidade,
        comp_email_verif: true,
    };
};

const criaApresentacao = (nome, origem, linkRef) => {
    return {
        apres_nome: nome,
        apres_origem: origem,
        apres_link_ref: linkRef,
    };
};

const criaParticipacao = (concurso, evento, checkin, tipoInscr) => {
    return {
        part_conc: concurso,
        part_event: evento,
        part_aceit_regul: true,
        part_checkin: checkin,
        part_tipo_inscr: tipoInscr,
    };
};

const criaExtra = (integrantes, estilo, linkAv, categoria, material, modalidade) => {
    const extra = {};
    if (integrantes) extra.extra_integ = integrantes;
    if (estilo) extra.extra_estil = estilo;
    if (linkAv) extra.extra_link_av = linkAv;
    if (categoria) extra.extra_categ = categoria;
    if (material) extra.extra_mat = material;
    if (modalidade) extra.extra_mod = modalidade;
    return (Object.keys(extra).length === 0 && extra.constructor === Object) ? null : extra;
}

const dados = [
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Jonas Simao Brito de Amorim",
        "comp_whats": "19993258146",
        "comp_nome_social": "Alcide",
        "comp_cpf": "74749449016",
        "comp_nasc": "27/05/2000",
        "comp_email": "jonas.simao.bri@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "1",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Irene Karina de Burgos",
        "comp_whats": "19998608141",
        "comp_nome_social": "",
        "comp_cpf": "20611019760",
        "comp_nasc": "24/06/1997",
        "comp_email": "irene.karina.de@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Jorge Carrara de Cabral",
        "comp_whats": "19992179781",
        "comp_nome_social": "Aldoney",
        "comp_cpf": "07757200890",
        "comp_nasc": "29/01/1996",
        "comp_email": "jorge.carrara.d@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Aecio Eustaquio Casanova Maldonado de Coelho",
        "comp_whats": "19997359399",
        "comp_nome_social": "",
        "comp_cpf": "49515562511",
        "comp_nasc": "01/05/2001",
        "comp_email": "aecio.eustaquio@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Aecio",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Danilo Estevao Carmona de Franco",
        "comp_whats": "19994124973",
        "comp_nome_social": "",
        "comp_cpf": "96879726020",
        "comp_nasc": "13/12/1998",
        "comp_email": "danilo.estevao@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Danilo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Albino Flores de Garcia",
        "comp_whats": "19996339418",
        "comp_nome_social": "",
        "comp_cpf": "90966845161",
        "comp_nasc": "10/10/2000",
        "comp_email": "albino.flores.d@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "4",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Marlene Suely Casanova de Romero",
        "comp_whats": "19990217340",
        "comp_nome_social": "",
        "comp_cpf": "62837759260",
        "comp_nasc": "10/01/1994",
        "comp_email": "marlene.suely.c@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Marlene",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Miranda Galvao de Romero",
        "comp_whats": "19992238356",
        "comp_nome_social": "",
        "comp_cpf": "64723778209",
        "comp_nasc": "11/05/1998",
        "comp_email": "miranda.galvao@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Miranda",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Marcos Ferraz de Gonçalves",
        "comp_whats": "19990995910",
        "comp_nome_social": "",
        "comp_cpf": "38535738274",
        "comp_nasc": "08/08/1994",
        "comp_email": "marcos.ferraz.d@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Miguel Valentin Aranda de Junqueira",
        "comp_whats": "19996934339",
        "comp_nome_social": "",
        "comp_cpf": "51425266940",
        "comp_nasc": "26/04/1994",
        "comp_email": "miguel.valentin@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Miguel",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Emanuel Arnaldo Rezende de Sepulveda",
        "comp_whats": "19991031623",
        "comp_nome_social": "",
        "comp_cpf": "55551478564",
        "comp_nasc": "12/07/1997",
        "comp_email": "emanuel.arnaldo@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Ademar Reginaldo Batista Dominato",
        "comp_whats": "19993008046",
        "comp_nome_social": "",
        "comp_cpf": "16574515181",
        "comp_nasc": "14/06/1991",
        "comp_email": "ademar.reginald@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Ademar",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Antonieta Margarete Colaço Cortes",
        "comp_whats": "19998924064",
        "comp_nome_social": "",
        "comp_cpf": "56321291366",
        "comp_nasc": "02/11/1992",
        "comp_email": "antonieta.marga@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Antonieta",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Jack Roberval Mascarenhas Ramires",
        "comp_whats": "19999083504",
        "comp_nome_social": "",
        "comp_cpf": "52104184991",
        "comp_nasc": "12/11/1994",
        "comp_email": "jack.roberval.m@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Jack",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Dario Emanoel Correia Mascarenhas",
        "comp_whats": "19992915538",
        "comp_nome_social": "Aercio",
        "comp_cpf": "36007004805",
        "comp_nasc": "16/03/1998",
        "comp_email": "dario.emanoel.c@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Dario",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Diogo Chaves Mascarenhas",
        "comp_whats": "19995077155",
        "comp_nome_social": "",
        "comp_cpf": "55669277260",
        "comp_nasc": "30/01/1993",
        "comp_email": "diogo.chaves.ma@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Diogo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Marco Mario Molina de alvares",
        "comp_whats": "19991615027",
        "comp_nome_social": "",
        "comp_cpf": "59620657861",
        "comp_nasc": "14/04/1996",
        "comp_email": "marco.mario.mol@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Marco",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Barnabe Otavio Bezerra de Bezerra",
        "comp_whats": "19998182167",
        "comp_nome_social": "",
        "comp_cpf": "14705264843",
        "comp_nasc": "04/05/1994",
        "comp_email": "barnabe.otavio@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Barnabe",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Inacio Nicolas de Delgado",
        "comp_whats": "19992432440",
        "comp_nome_social": "Aliciano",
        "comp_cpf": "76871643184",
        "comp_nasc": "09/10/1999",
        "comp_email": "inacio.nicolas@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Inacio",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Anderson Caio Gusmao Neves de Espanha",
        "comp_whats": "19992511750",
        "comp_nome_social": "",
        "comp_cpf": "18687671911",
        "comp_nasc": "12/04/1991",
        "comp_email": "anderson.caio.g@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Michele Espinoza de Fonseca",
        "comp_whats": "19994906721",
        "comp_nome_social": "Advalter",
        "comp_cpf": "06549802687",
        "comp_nasc": "05/07/1990",
        "comp_email": "michele.espinoz@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "6",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Albina Heloisa Galvao de Madeira",
        "comp_whats": "19998286691",
        "comp_nome_social": "Aladilson",
        "comp_cpf": "31897436572",
        "comp_nasc": "19/11/1989",
        "comp_email": "albina.heloisa@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Albina",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Emilia Cordeiro de Madeira",
        "comp_whats": "19991467234",
        "comp_nome_social": "Alberte",
        "comp_cpf": "73115841248",
        "comp_nasc": "29/07/1996",
        "comp_email": "emilia.cordeiro@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Emilia",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Manuela Estrada de Marques",
        "comp_whats": "19993824687",
        "comp_nome_social": "",
        "comp_cpf": "95141084426",
        "comp_nasc": "26/02/1995",
        "comp_email": "manuela.estrada@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "3",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Mayara Telma Lozano de Menezes",
        "comp_whats": "19994736693",
        "comp_nome_social": "Agadir",
        "comp_cpf": "90866697608",
        "comp_nasc": "29/12/1991",
        "comp_email": "mayara.telma.lo@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Mayara",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Bianca Amanda Benites de Pereira",
        "comp_whats": "19998159711",
        "comp_nome_social": "Alailtom",
        "comp_cpf": "85055243490",
        "comp_nasc": "31/05/1991",
        "comp_email": "bianca.amanda.b@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Isadora Prado",
        "comp_whats": "19996261884",
        "comp_nome_social": "",
        "comp_cpf": "55200750180",
        "comp_nasc": "08/07/1996",
        "comp_email": "isadora.prado@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Isadora",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Edson Jonathan Rezende de Roque",
        "comp_whats": "19993620973",
        "comp_nome_social": "",
        "comp_cpf": "97109053768",
        "comp_nasc": "02/05/1994",
        "comp_email": "edson.jonathan@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "3",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Fabiola Suely Caldeira de Figueira",
        "comp_whats": "19992833091",
        "comp_nome_social": "Adjuto",
        "comp_cpf": "98537630799",
        "comp_nasc": "14/11/1989",
        "comp_email": "fabiola.suely.c@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Milton Nathan de Gil Neto",
        "comp_whats": "19991191984",
        "comp_nome_social": "",
        "comp_cpf": "07085636866",
        "comp_nasc": "27/12/1990",
        "comp_email": "milton.nathan.d@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Milton",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Miranda Carrara de Iglesias",
        "comp_whats": "19991747161",
        "comp_nome_social": "Advando",
        "comp_cpf": "37860083531",
        "comp_nasc": "04/04/1991",
        "comp_email": "miranda.carrara@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Jesus Samuel de Martines",
        "comp_whats": "19995348870",
        "comp_nome_social": "",
        "comp_cpf": "57013604070",
        "comp_nasc": "23/03/1998",
        "comp_email": "jesus.samuel.de@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Jesus",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Manuel Cleberson Azevedo Chaves",
        "comp_whats": "19993397666",
        "comp_nome_social": "",
        "comp_cpf": "19323433349",
        "comp_nasc": "24/09/1992",
        "comp_email": "manuel.cleberso@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Rai Sergio Oliveira Prado",
        "comp_whats": "19995717403",
        "comp_nome_social": "",
        "comp_cpf": "96731107433",
        "comp_nasc": "15/07/1998",
        "comp_email": "rai.sergio.oliv@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Rai",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Gisele Barros",
        "comp_whats": "19999102441",
        "comp_nome_social": "Almim",
        "comp_cpf": "42354216114",
        "comp_nasc": "13/08/1990",
        "comp_email": "gisele.barros@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Gisele",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Andressa Godoi",
        "comp_whats": "19991765591",
        "comp_nome_social": "",
        "comp_cpf": "50926802615",
        "comp_nasc": "11/05/1992",
        "comp_email": "andressa.godoi@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Andressa",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Damiao Gilson Gil",
        "comp_whats": "19994549710",
        "comp_nome_social": "",
        "comp_cpf": "56906185438",
        "comp_nasc": "21/03/1992",
        "comp_email": "damiao.gilson.g@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Julia Bruna Correia Delvalle de Melo",
        "comp_whats": "19992310861",
        "comp_nome_social": "",
        "comp_cpf": "83995402852",
        "comp_nasc": "28/11/1993",
        "comp_email": "julia.bruna.cor@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Julia",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Hilda Delvalle Pacheco",
        "comp_whats": "19990609968",
        "comp_nome_social": "",
        "comp_cpf": "47445191305",
        "comp_nasc": "10/11/1993",
        "comp_email": "hilda.delvalle@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Ivanete Silvia Faria",
        "comp_whats": "19998507150",
        "comp_nome_social": "Alequesandro",
        "comp_cpf": "63741246506",
        "comp_nasc": "21/12/1990",
        "comp_email": "ivanete.silvia@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Ivanete",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Michele Bruna Benites",
        "comp_whats": "19990329432",
        "comp_nome_social": "",
        "comp_cpf": "72974538460",
        "comp_nasc": "01/07/1990",
        "comp_email": "michele.bruna.b@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Michele",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Andres Aragao de Ortiz",
        "comp_whats": "19996533163",
        "comp_nome_social": "",
        "comp_cpf": "01027935141",
        "comp_nasc": "28/05/1993",
        "comp_email": "andres.aragao.d@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Andres",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Diogo Rocha Filho",
        "comp_whats": "19996258550",
        "comp_nome_social": "Admauro",
        "comp_cpf": "79828037769",
        "comp_nasc": "18/08/1991",
        "comp_email": "diogo.rocha.fil@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Ederson Burgos Camacho",
        "comp_whats": "19990489298",
        "comp_nome_social": "",
        "comp_cpf": "69595822612",
        "comp_nasc": "12/05/1994",
        "comp_email": "ederson.burgos@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Ederson",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Noel Everton Aguiar de Faria",
        "comp_whats": "19998907722",
        "comp_nome_social": "",
        "comp_cpf": "12224969333",
        "comp_nasc": "12/04/1995",
        "comp_email": "noel.everton.ag@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Heitor Paz Reis",
        "comp_whats": "19997619797",
        "comp_nome_social": "",
        "comp_cpf": "30251639410",
        "comp_nasc": "06/12/1998",
        "comp_email": "heitor.paz.reis@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Heitor",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Camilo Estrada Duque",
        "comp_whats": "19990218400",
        "comp_nome_social": "",
        "comp_cpf": "00488446678",
        "comp_nasc": "05/04/1990",
        "comp_email": "camilo.estrada@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Camilo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Joaquin Lucas Flores de Gil",
        "comp_whats": "19994231026",
        "comp_nome_social": "",
        "comp_cpf": "45810660509",
        "comp_nasc": "25/10/2001",
        "comp_email": "joaquin.lucas.f@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Joaquin",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Josue Balestero Neto",
        "comp_whats": "19994548020",
        "comp_nome_social": "",
        "comp_cpf": "90947524843",
        "comp_nasc": "05/08/1989",
        "comp_email": "josue.balestero@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "1",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Oliver Paulo Chaves",
        "comp_whats": "19998930080",
        "comp_nome_social": "",
        "comp_cpf": "54950824864",
        "comp_nasc": "18/07/1994",
        "comp_email": "oliver.paulo.ch@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "4",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Ana Souza",
        "comp_whats": "19993258146",
        "comp_nome_social": "Joao Paulo",
        "comp_cpf": "48703012611",
        "comp_nasc": "27/05/2000",
        "comp_email": "ana.souza5203@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "1",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Beatriz Barros",
        "comp_whats": "19998608141",
        "comp_nome_social": "",
        "comp_cpf": "91039034519",
        "comp_nasc": "24/06/1997",
        "comp_email": "beatriz.barros8485@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Carlos Silva",
        "comp_whats": "19992179781",
        "comp_nome_social": "Pedro",
        "comp_cpf": "51351854372",
        "comp_nasc": "29/01/1996",
        "comp_email": "carlos.silva7186@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Daniela Oliveira",
        "comp_whats": "19997359399",
        "comp_nome_social": "",
        "comp_cpf": "43459402300",
        "comp_nasc": "01/05/2001",
        "comp_email": "daniela.oliveira6005@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Aecio",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Eduardo Rocha",
        "comp_whats": "19994124973",
        "comp_nome_social": "",
        "comp_cpf": "10930938895",
        "comp_nasc": "13/12/1998",
        "comp_email": "eduardo.rocha2976@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Danilo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Fernanda Gomes",
        "comp_whats": "19996339418",
        "comp_nome_social": "",
        "comp_cpf": "10421341700",
        "comp_nasc": "10/10/2000",
        "comp_email": "fernanda.gomes7727@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "4",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Gabriel Alves",
        "comp_whats": "19990217340",
        "comp_nome_social": "",
        "comp_cpf": "35345983348",
        "comp_nasc": "10/01/1994",
        "comp_email": "gabriel.alves3809@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Marlene",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Helena Costa",
        "comp_whats": "19992238356",
        "comp_nome_social": "",
        "comp_cpf": "79547708007",
        "comp_nasc": "11/05/1998",
        "comp_email": "helena.costa7882@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Miranda",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Igor Santos",
        "comp_whats": "19990995910",
        "comp_nome_social": "",
        "comp_cpf": "22007540606",
        "comp_nasc": "08/08/1994",
        "comp_email": "igor.santos5235@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Juliana Lima",
        "comp_whats": "19996934339",
        "comp_nome_social": "",
        "comp_cpf": "97158449793",
        "comp_nasc": "26/04/1994",
        "comp_email": "juliana.lima7783@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Miguel",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Lucas Moraes",
        "comp_whats": "19991031623",
        "comp_nome_social": "",
        "comp_cpf": "92647237301",
        "comp_nasc": "12/07/1997",
        "comp_email": "lucas.moraes1273@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Mariana Dias",
        "comp_whats": "19993008046",
        "comp_nome_social": "",
        "comp_cpf": "36387245494",
        "comp_nasc": "14/06/1991",
        "comp_email": "mariana.dias3528@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Ademar",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Nicolas Peixoto",
        "comp_whats": "19998924064",
        "comp_nome_social": "",
        "comp_cpf": "90133347842",
        "comp_nasc": "02/11/1992",
        "comp_email": "nicolas.peixoto9485@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Antonieta",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Olivia Freitas",
        "comp_whats": "19999083504",
        "comp_nome_social": "",
        "comp_cpf": "41682486907",
        "comp_nasc": "12/11/1994",
        "comp_email": "olivia.freitas6847@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Jack",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Paulo Teixeira",
        "comp_whats": "19992915538",
        "comp_nome_social": "Joao Miguel",
        "comp_cpf": "12160649465",
        "comp_nasc": "16/03/1998",
        "comp_email": "paulo.teixeira7393@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Dario",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Raquel Araujo",
        "comp_whats": "19995077155",
        "comp_nome_social": "",
        "comp_cpf": "40541688847",
        "comp_nasc": "30/01/1993",
        "comp_email": "raquel.araujo8397@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Diogo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Samuel Batista",
        "comp_whats": "19991615027",
        "comp_nome_social": "",
        "comp_cpf": "87176928738",
        "comp_nasc": "14/04/1996",
        "comp_email": "samuel.batista4259@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Marco",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Tania Cardoso",
        "comp_whats": "19998182167",
        "comp_nome_social": "",
        "comp_cpf": "25835730390",
        "comp_nasc": "04/05/1994",
        "comp_email": "tania.cardoso2342@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Barnabe",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Vinicius Ribeiro",
        "comp_whats": "19992432440",
        "comp_nome_social": "Rafael",
        "comp_cpf": "55503145925",
        "comp_nasc": "09/10/1999",
        "comp_email": "vinicius.ribeiro8059@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Inacio",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Yasmin Ferreira",
        "comp_whats": "19992511750",
        "comp_nome_social": "",
        "comp_cpf": "24125385068",
        "comp_nasc": "12/04/1991",
        "comp_email": "yasmin.ferreira9115@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Andre Lopes",
        "comp_whats": "19994906721",
        "comp_nome_social": "Rafael",
        "comp_cpf": "37010802408",
        "comp_nasc": "05/07/1990",
        "comp_email": "andre.lopes7892@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "6",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Bruna Pereira",
        "comp_whats": "19998286691",
        "comp_nome_social": "Joao Gabriel",
        "comp_cpf": "01152503014",
        "comp_nasc": "19/11/1989",
        "comp_email": "bruna.pereira9373@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Albina",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Caio Pinto",
        "comp_whats": "19991467234",
        "comp_nome_social": "Joao Guilherme",
        "comp_cpf": "01860286950",
        "comp_nasc": "29/07/1996",
        "comp_email": "caio.pinto6712@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Emilia",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Debora Carvalho",
        "comp_whats": "19993824687",
        "comp_nome_social": "",
        "comp_cpf": "21061306356",
        "comp_nasc": "26/02/1995",
        "comp_email": "debora.carvalho1051@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "3",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Enzo Martins",
        "comp_whats": "19994736693",
        "comp_nome_social": "Joao Henrique",
        "comp_cpf": "53393630660",
        "comp_nasc": "29/12/1991",
        "comp_email": "enzo.martins8074@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Mayara",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Fabiana Mendes",
        "comp_whats": "19998159711",
        "comp_nome_social": "Joao Lucas",
        "comp_cpf": "33315275050",
        "comp_nasc": "31/05/1991",
        "comp_email": "fabiana.mendes7311@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Gustavo Nascimento",
        "comp_whats": "19996261884",
        "comp_nome_social": "",
        "comp_cpf": "61744649979",
        "comp_nasc": "08/07/1996",
        "comp_email": "gustavo.nascimento3602@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Isadora",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Isabela Farias",
        "comp_whats": "19993620973",
        "comp_nome_social": "",
        "comp_cpf": "09188949990",
        "comp_nasc": "02/05/1994",
        "comp_email": "isabela.farias9762@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "3",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Joao Viana",
        "comp_whats": "19992833091",
        "comp_nome_social": "Joao Guilherme",
        "comp_cpf": "79488895403",
        "comp_nasc": "14/11/1989",
        "comp_email": "joao.viana5033@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Keila Duarte",
        "comp_whats": "19991191984",
        "comp_nome_social": "",
        "comp_cpf": "49200408060",
        "comp_nasc": "27/12/1990",
        "comp_email": "keila.duarte7701@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Milton",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Leandro Brito",
        "comp_whats": "19991747161",
        "comp_nome_social": "Matheus",
        "comp_cpf": "25983830953",
        "comp_nasc": "04/04/1991",
        "comp_email": "leandro.brito6193@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Marcia Leal",
        "comp_whats": "19995348870",
        "comp_nome_social": "",
        "comp_cpf": "49416614513",
        "comp_nasc": "23/03/1998",
        "comp_email": "marcia.leal4450@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Jesus",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Norberto Andrade",
        "comp_whats": "19993397666",
        "comp_nome_social": "",
        "comp_cpf": "34032227993",
        "comp_nasc": "24/09/1992",
        "comp_email": "norberto.andrade9354@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Patricia Vargas",
        "comp_whats": "19995717403",
        "comp_nome_social": "",
        "comp_cpf": "41024050114",
        "comp_nasc": "15/07/1998",
        "comp_email": "patricia.vargas9751@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Rai",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Rafael Monteiro",
        "comp_whats": "19999102441",
        "comp_nome_social": "Joao Gabriel",
        "comp_cpf": "61116371006",
        "comp_nasc": "13/08/1990",
        "comp_email": "rafael.monteiro2941@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Gisele",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Sonia Almeida",
        "comp_whats": "19991765591",
        "comp_nome_social": "",
        "comp_cpf": "71783673346",
        "comp_nasc": "11/05/1992",
        "comp_email": "sonia.almeida4499@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Andressa",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Thiago Lacerda",
        "comp_whats": "19994549710",
        "comp_nome_social": "",
        "comp_cpf": "90022316108",
        "comp_nasc": "21/03/1992",
        "comp_email": "thiago.lacerda7937@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Vanessa Pacheco",
        "comp_whats": "19992310861",
        "comp_nome_social": "",
        "comp_cpf": "33242232534",
        "comp_nasc": "28/11/1993",
        "comp_email": "vanessa.pacheco1487@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Julia",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "William Barbosa",
        "comp_whats": "19990609968",
        "comp_nome_social": "",
        "comp_cpf": "66554639470",
        "comp_nasc": "10/11/1993",
        "comp_email": "william.barbosa3356@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Ximena Fonseca",
        "comp_whats": "19998507150",
        "comp_nome_social": "Joao Antonio",
        "comp_cpf": "81480492892",
        "comp_nasc": "21/12/1990",
        "comp_email": "ximena.fonseca1778@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Ivanete",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Antonio Morais",
        "comp_whats": "19990329432",
        "comp_nome_social": "",
        "comp_cpf": "15522626186",
        "comp_nasc": "01/07/1990",
        "comp_email": "antonio.morais5275@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Michele",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Bianca Neves",
        "comp_whats": "19996533163",
        "comp_nome_social": "",
        "comp_cpf": "73639425014",
        "comp_nasc": "28/05/1993",
        "comp_email": "bianca.neves8117@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Andres",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Claudio Franco",
        "comp_whats": "19996258550",
        "comp_nome_social": "Joao Henrique",
        "comp_cpf": "11008300497",
        "comp_nasc": "18/08/1991",
        "comp_email": "claudio.franco4725@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Denise Ramos",
        "comp_whats": "19990489298",
        "comp_nome_social": "",
        "comp_cpf": "06553662452",
        "comp_nasc": "12/05/1994",
        "comp_email": "denise.ramos9119@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Ederson",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Estevan Cunha",
        "comp_whats": "19998907722",
        "comp_nome_social": "",
        "comp_cpf": "08952884868",
        "comp_nasc": "12/04/1995",
        "comp_email": "estevan.cunha3403@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Flavia Pires",
        "comp_whats": "19997619797",
        "comp_nome_social": "",
        "comp_cpf": "93237933295",
        "comp_nasc": "06/12/1998",
        "comp_email": "flavia.pires9531@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Heitor",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Guilherme Teixeira",
        "comp_whats": "19990218400",
        "comp_nome_social": "",
        "comp_cpf": "61136036601",
        "comp_nasc": "05/04/1990",
        "comp_email": "guilherme.teixeira2328@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Camilo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "iris Esteves",
        "comp_whats": "19994231026",
        "comp_nome_social": "",
        "comp_cpf": "82781297542",
        "comp_nasc": "25/10/2001",
        "comp_email": "iris.esteves8410@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Joaquin",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Jonathan Mello",
        "comp_whats": "19994548020",
        "comp_nome_social": "",
        "comp_cpf": "27682338466",
        "comp_nasc": "05/08/1989",
        "comp_email": "jonathan.mello1380@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "1",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Kamila Sampaio",
        "comp_whats": "19998930080",
        "comp_nome_social": "",
        "comp_cpf": "63108430440",
        "comp_nasc": "18/07/1994",
        "comp_email": "kamila.sampaio9925@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "4",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Leonardo Correia",
        "comp_whats": "19993258146",
        "comp_nome_social": "Thiago",
        "comp_cpf": "19470700023",
        "comp_nasc": "27/05/2000",
        "comp_email": "leonardo.correia1871@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "1",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Mirella Figueiredo",
        "comp_whats": "19998608141",
        "comp_nome_social": "",
        "comp_cpf": "13064669540",
        "comp_nasc": "24/06/1997",
        "comp_email": "mirella.figueiredo5256@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Otavio Machado",
        "comp_whats": "19992179781",
        "comp_nome_social": "Joao Lucas",
        "comp_cpf": "21152401890",
        "comp_nasc": "29/01/1996",
        "comp_email": "otavio.machado5705@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Priscila Guimaraes",
        "comp_whats": "19997359399",
        "comp_nome_social": "",
        "comp_cpf": "66754277254",
        "comp_nasc": "01/05/2001",
        "comp_email": "priscila.guimaraes2771@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Aecio",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Renato Galvao",
        "comp_whats": "19994124973",
        "comp_nome_social": "",
        "comp_cpf": "75017894284",
        "comp_nasc": "13/12/1998",
        "comp_email": "renato.galvao5925@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Danilo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Silvia Magalhaes",
        "comp_whats": "19996339418",
        "comp_nome_social": "",
        "comp_cpf": "90338677887",
        "comp_nasc": "10/10/2000",
        "comp_email": "silvia.magalhaes6292@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "4",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Tiago Guedes",
        "comp_whats": "19990217340",
        "comp_nome_social": "",
        "comp_cpf": "12293543102",
        "comp_nasc": "10/01/1994",
        "comp_email": "tiago.guedes5146@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Marlene",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "ursula Amaral",
        "comp_whats": "19992238356",
        "comp_nome_social": "",
        "comp_cpf": "16632696538",
        "comp_nasc": "11/05/1998",
        "comp_email": "ursula.amaral6009@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Miranda",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Victor Hugo",
        "comp_whats": "19990995910",
        "comp_nome_social": "",
        "comp_cpf": "70822238705",
        "comp_nasc": "08/08/1994",
        "comp_email": "victor.hugo7271@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Zilda Queiroz",
        "comp_whats": "19996934339",
        "comp_nome_social": "",
        "comp_cpf": "27014277545",
        "comp_nasc": "26/04/1994",
        "comp_email": "zilda.queiroz4850@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Miguel",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Amelia Rodrigues",
        "comp_whats": "19991031623",
        "comp_nome_social": "",
        "comp_cpf": "29059042166",
        "comp_nasc": "12/07/1997",
        "comp_email": "amelia.rodrigues3937@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Bernardo Lira",
        "comp_whats": "19993008046",
        "comp_nome_social": "",
        "comp_cpf": "04548190058",
        "comp_nasc": "14/06/1991",
        "comp_email": "bernardo.lira7791@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Ademar",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Catarina Salgado",
        "comp_whats": "19998924064",
        "comp_nome_social": "",
        "comp_cpf": "41107212960",
        "comp_nasc": "02/11/1992",
        "comp_email": "catarina.salgado3061@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Antonieta",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Diego Portela",
        "comp_whats": "19999083504",
        "comp_nome_social": "",
        "comp_cpf": "03830096267",
        "comp_nasc": "12/11/1994",
        "comp_email": "diego.portela1787@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Jack",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Elisa Castro",
        "comp_whats": "19992915538",
        "comp_nome_social": "Joao Lucas",
        "comp_cpf": "06059500757",
        "comp_nasc": "16/03/1998",
        "comp_email": "elisa.castro1913@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Dario",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Felipe Drummond",
        "comp_whats": "19995077155",
        "comp_nome_social": "",
        "comp_cpf": "67488423607",
        "comp_nasc": "30/01/1993",
        "comp_email": "felipe.drummond9516@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Diogo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Graziela Fonseca",
        "comp_whats": "19991615027",
        "comp_nome_social": "",
        "comp_cpf": "27297815870",
        "comp_nasc": "14/04/1996",
        "comp_email": "graziela.fonseca6677@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Marco",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Helio Pimentel",
        "comp_whats": "19998182167",
        "comp_nome_social": "",
        "comp_cpf": "52459958919",
        "comp_nasc": "04/05/1994",
        "comp_email": "helio.pimentel4349@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Barnabe",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "italo Barreto",
        "comp_whats": "19992432440",
        "comp_nome_social": "Joao Jose",
        "comp_cpf": "33963173947",
        "comp_nasc": "09/10/1999",
        "comp_email": "italo.barreto9172@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Inacio",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Julia Quintana",
        "comp_whats": "19992511750",
        "comp_nome_social": "",
        "comp_cpf": "98399087157",
        "comp_nasc": "12/04/1991",
        "comp_email": "julia.quintana2854@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Kaue Damasceno",
        "comp_whats": "19994906721",
        "comp_nome_social": "Joao Henrique",
        "comp_cpf": "51609260546",
        "comp_nasc": "05/07/1990",
        "comp_email": "kaue.damasceno6880@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "6",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Livia Santana",
        "comp_whats": "19998286691",
        "comp_nome_social": "Joao Antonio",
        "comp_cpf": "27340181873",
        "comp_nasc": "19/11/1989",
        "comp_email": "livia.santana5617@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Albina",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Marcos Valle",
        "comp_whats": "19991467234",
        "comp_nome_social": "Joao Miguel",
        "comp_cpf": "76753799427",
        "comp_nasc": "29/07/1996",
        "comp_email": "marcos.valle9027@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Emilia",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Natalia Couto",
        "comp_whats": "19993824687",
        "comp_nome_social": "",
        "comp_cpf": "37225919458",
        "comp_nasc": "26/02/1995",
        "comp_email": "natalia.couto7937@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "3",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Orlando Furtado",
        "comp_whats": "19994736693",
        "comp_nome_social": "Joaquim",
        "comp_cpf": "05026495508",
        "comp_nasc": "29/12/1991",
        "comp_email": "orlando.furtado5216@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Mayara",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Pietra Lemos",
        "comp_whats": "19998159711",
        "comp_nome_social": "Henrique",
        "comp_cpf": "26029040405",
        "comp_nasc": "31/05/1991",
        "comp_email": "pietra.lemos4970@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Quirino Goulart",
        "comp_whats": "19996261884",
        "comp_nome_social": "",
        "comp_cpf": "44277614612",
        "comp_nasc": "08/07/1996",
        "comp_email": "quirino.goulart3100@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Isadora",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Rebeca Alencar",
        "comp_whats": "19993620973",
        "comp_nome_social": "",
        "comp_cpf": "40794923240",
        "comp_nasc": "02/05/1994",
        "comp_email": "rebeca.alencar6867@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "3",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Sergio Holanda",
        "comp_whats": "19992833091",
        "comp_nome_social": "Joao Marcelo",
        "comp_cpf": "02888723476",
        "comp_nasc": "14/11/1989",
        "comp_email": "sergio.holanda8380@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Tereza Braga",
        "comp_whats": "19991191984",
        "comp_nome_social": "",
        "comp_cpf": "16977464208",
        "comp_nasc": "27/12/1990",
        "comp_email": "tereza.braga3552@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Milton",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Ulisses Serrano",
        "comp_whats": "19991747161",
        "comp_nome_social": "Joao Guilherme",
        "comp_cpf": "10383456185",
        "comp_nasc": "04/04/1991",
        "comp_email": "ulisses.serrano2886@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Viviane Menezes",
        "comp_whats": "19995348870",
        "comp_nome_social": "",
        "comp_cpf": "28434481405",
        "comp_nasc": "23/03/1998",
        "comp_email": "viviane.menezes9711@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Jesus",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Walter Nunes",
        "comp_whats": "19993397666",
        "comp_nome_social": "",
        "comp_cpf": "17957512070",
        "comp_nasc": "24/09/1992",
        "comp_email": "walter.nunes2018@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Yago Melo",
        "comp_whats": "19995717403",
        "comp_nome_social": "",
        "comp_cpf": "22703586434",
        "comp_nasc": "15/07/1998",
        "comp_email": "yago.melo1692@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Rai",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Zacarias Estrela",
        "comp_whats": "19999102441",
        "comp_nome_social": "Joao Miguel",
        "comp_cpf": "57423647098",
        "comp_nasc": "13/08/1990",
        "comp_email": "zacarias.estrela5873@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Gisele",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Agatha Moreira",
        "comp_whats": "19991765591",
        "comp_nome_social": "",
        "comp_cpf": "51315654210",
        "comp_nasc": "11/05/1992",
        "comp_email": "agatha.moreira8857@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Andressa",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Bruno Campos",
        "comp_whats": "19994549710",
        "comp_nome_social": "",
        "comp_cpf": "79473952414",
        "comp_nasc": "21/03/1992",
        "comp_email": "bruno.campos2305@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Cecilia Brandao",
        "comp_whats": "19992310861",
        "comp_nome_social": "",
        "comp_cpf": "68722207830",
        "comp_nasc": "28/11/1993",
        "comp_email": "cecilia.brandao3787@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Julia",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Danilo Vega",
        "comp_whats": "19990609968",
        "comp_nome_social": "",
        "comp_cpf": "22821338899",
        "comp_nasc": "10/11/1993",
        "comp_email": "danilo.vega8245@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Eunice Lobato",
        "comp_whats": "19998507150",
        "comp_nome_social": "Thiago",
        "comp_cpf": "95746697699",
        "comp_nasc": "21/12/1990",
        "comp_email": "eunice.lobato5551@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Ivanete",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Fabio Junqueira",
        "comp_whats": "19990329432",
        "comp_nome_social": "",
        "comp_cpf": "33308132028",
        "comp_nasc": "01/07/1990",
        "comp_email": "fabio.junqueira6232@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Michele",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Giovana Rocha",
        "comp_whats": "19996533163",
        "comp_nome_social": "",
        "comp_cpf": "84183724350",
        "comp_nasc": "28/05/1993",
        "comp_email": "giovana.rocha5698@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Andres",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Heitor Xavier",
        "comp_whats": "19996258550",
        "comp_nome_social": "Joao Felipe",
        "comp_cpf": "04477056362",
        "comp_nasc": "18/08/1991",
        "comp_email": "heitor.xavier5619@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "icaro Veloso",
        "comp_whats": "19990489298",
        "comp_nome_social": "",
        "comp_cpf": "50037268210",
        "comp_nasc": "12/05/1994",
        "comp_email": "icaro.veloso5443@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Ederson",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Jaqueline Maia",
        "comp_whats": "19998907722",
        "comp_nome_social": "",
        "comp_cpf": "83678769039",
        "comp_nasc": "12/04/1995",
        "comp_email": "jaqueline.maia5933@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Kristian Barcelos",
        "comp_whats": "19997619797",
        "comp_nome_social": "",
        "comp_cpf": "76063451200",
        "comp_nasc": "06/12/1998",
        "comp_email": "kristian.barcelos2872@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Heitor",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Luan Palhares",
        "comp_whats": "19990218400",
        "comp_nome_social": "",
        "comp_cpf": "13519291517",
        "comp_nasc": "05/04/1990",
        "comp_email": "luan.palhares1624@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Camilo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Manuela Carneiro",
        "comp_whats": "19994231026",
        "comp_nome_social": "",
        "comp_cpf": "40866141898",
        "comp_nasc": "25/10/2001",
        "comp_email": "manuela.carneiro1602@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Joaquin",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Naomi Jordao",
        "comp_whats": "19994548020",
        "comp_nome_social": "",
        "comp_cpf": "91426511310",
        "comp_nasc": "05/08/1989",
        "comp_email": "naomi.jordao8107@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "1",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Oscar Prado",
        "comp_whats": "19998930080",
        "comp_nome_social": "",
        "comp_cpf": "61803069406",
        "comp_nasc": "18/07/1994",
        "comp_email": "oscar.prado8852@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "4",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Paloma Queiros",
        "comp_whats": "19993258146",
        "comp_nome_social": "Joao Henrique",
        "comp_cpf": "57859969106",
        "comp_nasc": "27/05/2000",
        "comp_email": "paloma.queiros4957@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "1",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Quentin Navarro",
        "comp_whats": "19998608141",
        "comp_nome_social": "",
        "comp_cpf": "55532964475",
        "comp_nasc": "24/06/1997",
        "comp_email": "quentin.navarro1703@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Rosana Camara",
        "comp_whats": "19992179781",
        "comp_nome_social": "Ian",
        "comp_cpf": "65319086377",
        "comp_nasc": "29/01/1996",
        "comp_email": "rosana.camara4120@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Stefany Goulart",
        "comp_whats": "19997359399",
        "comp_nome_social": "",
        "comp_cpf": "87835505690",
        "comp_nasc": "01/05/2001",
        "comp_email": "stefany.goulart5406@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Aecio",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Tito Vilanova",
        "comp_whats": "19994124973",
        "comp_nome_social": "",
        "comp_cpf": "01764704762",
        "comp_nasc": "13/12/1998",
        "comp_email": "tito.vilanova1164@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Danilo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Ursulina Fagundes",
        "comp_whats": "19996339418",
        "comp_nome_social": "",
        "comp_cpf": "54018888562",
        "comp_nasc": "10/10/2000",
        "comp_email": "ursulina.fagundes9492@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "4",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Vitor Alcantara",
        "comp_whats": "19990217340",
        "comp_nome_social": "",
        "comp_cpf": "18496383814",
        "comp_nasc": "10/01/1994",
        "comp_email": "vitor.alcantara9259@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Marlene",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Wendy Lima",
        "comp_whats": "19992238356",
        "comp_nome_social": "",
        "comp_cpf": "41486360246",
        "comp_nasc": "11/05/1998",
        "comp_email": "wendy.lima1447@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Miranda",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Yuri Fernandes",
        "comp_whats": "19990995910",
        "comp_nome_social": "",
        "comp_cpf": "18942902839",
        "comp_nasc": "08/08/1994",
        "comp_email": "yuri.fernandes8780@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Zara Coelho",
        "comp_whats": "19996934339",
        "comp_nome_social": "",
        "comp_cpf": "89482712617",
        "comp_nasc": "26/04/1994",
        "comp_email": "zara.coelho1558@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Miguel",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Ademir Soares",
        "comp_whats": "19991031623",
        "comp_nome_social": "",
        "comp_cpf": "15395244000",
        "comp_nasc": "12/07/1997",
        "comp_email": "ademir.soares3036@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Bianca Machado",
        "comp_whats": "19993008046",
        "comp_nome_social": "",
        "comp_cpf": "54534510764",
        "comp_nasc": "14/06/1991",
        "comp_email": "bianca.machado5246@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Ademar",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Cesar Augusto",
        "comp_whats": "19998924064",
        "comp_nome_social": "",
        "comp_cpf": "45236355109",
        "comp_nasc": "02/11/1992",
        "comp_email": "cesar.augusto6943@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Antonieta",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Dandara Valverde",
        "comp_whats": "19999083504",
        "comp_nome_social": "",
        "comp_cpf": "92422976239",
        "comp_nasc": "12/11/1994",
        "comp_email": "dandara.valverde5611@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Jack",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Everaldo Pacheco",
        "comp_whats": "19992915538",
        "comp_nome_social": "Joao Antonio",
        "comp_cpf": "94868323660",
        "comp_nasc": "16/03/1998",
        "comp_email": "everaldo.pacheco7062@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Dario",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Fabiola Barreiros",
        "comp_whats": "19995077155",
        "comp_nome_social": "",
        "comp_cpf": "83888166918",
        "comp_nasc": "30/01/1993",
        "comp_email": "fabiola.barreiros9328@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Diogo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Gerson Tavares",
        "comp_whats": "19991615027",
        "comp_nome_social": "",
        "comp_cpf": "96092957973",
        "comp_nasc": "14/04/1996",
        "comp_email": "gerson.tavares7226@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Marco",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Hortencia Lobo",
        "comp_whats": "19998182167",
        "comp_nome_social": "",
        "comp_cpf": "68002465490",
        "comp_nasc": "04/05/1994",
        "comp_email": "hortencia.lobo1807@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Barnabe",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "italo Queiroga",
        "comp_whats": "19992432440",
        "comp_nome_social": "Cesar",
        "comp_cpf": "83535884209",
        "comp_nasc": "09/10/1999",
        "comp_email": "italo.queiroga1271@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Inacio",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Janaina Macedo",
        "comp_whats": "19992511750",
        "comp_nome_social": "",
        "comp_cpf": "74678828826",
        "comp_nasc": "12/04/1991",
        "comp_email": "janaina.macedo9245@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Klaus Vieira",
        "comp_whats": "19994906721",
        "comp_nome_social": "Joao Rafael",
        "comp_cpf": "71990592139",
        "comp_nasc": "05/07/1990",
        "comp_email": "klaus.vieira8126@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "6",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Lorraine Figueira",
        "comp_whats": "19998286691",
        "comp_nome_social": "Joao Miguel",
        "comp_cpf": "56704953574",
        "comp_nasc": "19/11/1989",
        "comp_email": "lorraine.figueira5110@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Albina",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Maicon Douglas",
        "comp_whats": "19991467234",
        "comp_nome_social": "Joao Rafael",
        "comp_cpf": "38761820261",
        "comp_nasc": "29/07/1996",
        "comp_email": "maicon.douglas4155@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Emilia",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Nair Belmonte",
        "comp_whats": "19993824687",
        "comp_nome_social": "",
        "comp_cpf": "25927072712",
        "comp_nasc": "26/02/1995",
        "comp_email": "nair.belmonte1436@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "3",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Odair Terra",
        "comp_whats": "19994736693",
        "comp_nome_social": "Joao Miguel",
        "comp_cpf": "04929588405",
        "comp_nasc": "29/12/1991",
        "comp_email": "odair.terra6457@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Mayara",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Patrice Fontes",
        "comp_whats": "19998159711",
        "comp_nome_social": "Joao Pedro",
        "comp_cpf": "66501531845",
        "comp_nasc": "31/05/1991",
        "comp_email": "patrice.fontes3649@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Ramon Oliveira",
        "comp_whats": "19996261884",
        "comp_nome_social": "",
        "comp_cpf": "21434537102",
        "comp_nasc": "08/07/1996",
        "comp_email": "ramon.oliveira4349@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Isadora",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Selma Carvalhais",
        "comp_whats": "19993620973",
        "comp_nome_social": "",
        "comp_cpf": "97936025464",
        "comp_nasc": "02/05/1994",
        "comp_email": "selma.carvalhais9338@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "3",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Tacio Menezes",
        "comp_whats": "19992833091",
        "comp_nome_social": "Joao Paulo",
        "comp_cpf": "59400824750",
        "comp_nasc": "14/11/1989",
        "comp_email": "tacio.menezes7797@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "ursula Peregrino",
        "comp_whats": "19991191984",
        "comp_nome_social": "",
        "comp_cpf": "51237147824",
        "comp_nasc": "27/12/1990",
        "comp_email": "ursula.peregrino6425@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Milton",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Valdemar Neto",
        "comp_whats": "19991747161",
        "comp_nome_social": "Joao Paulo",
        "comp_cpf": "89565097944",
        "comp_nasc": "04/04/1991",
        "comp_email": "valdemar.neto9306@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Xuxa Meneghel",
        "comp_whats": "19995348870",
        "comp_nome_social": "",
        "comp_cpf": "41598646516",
        "comp_nasc": "23/03/1998",
        "comp_email": "xuxa.meneghel3299@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Jesus",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Yolanda Vasconcelos",
        "comp_whats": "19993397666",
        "comp_nome_social": "",
        "comp_cpf": "46231819361",
        "comp_nasc": "24/09/1992",
        "comp_email": "yolanda.vasconcelos5228@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Zeno Macedo",
        "comp_whats": "19995717403",
        "comp_nome_social": "",
        "comp_cpf": "52308288892",
        "comp_nasc": "15/07/1998",
        "comp_email": "zeno.macedo4939@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Rai",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Alana Padilha",
        "comp_whats": "19999102441",
        "comp_nome_social": "Eduardo",
        "comp_cpf": "32200554516",
        "comp_nasc": "13/08/1990",
        "comp_email": "alana.padilha5921@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Gisele",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Breno Carneiro",
        "comp_whats": "19991765591",
        "comp_nome_social": "",
        "comp_cpf": "45181701809",
        "comp_nasc": "11/05/1992",
        "comp_email": "breno.carneiro7599@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Andressa",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Cintia Dornelas",
        "comp_whats": "19994549710",
        "comp_nome_social": "",
        "comp_cpf": "80899673961",
        "comp_nasc": "21/03/1992",
        "comp_email": "cintia.dornelas1338@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Dante Leao",
        "comp_whats": "19992310861",
        "comp_nome_social": "",
        "comp_cpf": "00307806596",
        "comp_nasc": "28/11/1993",
        "comp_email": "dante.leao5618@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Julia",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Erika Zimmerman",
        "comp_whats": "19990609968",
        "comp_nome_social": "",
        "comp_cpf": "69512825104",
        "comp_nasc": "10/11/1993",
        "comp_email": "erika.zimmerman8405@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Fabio Lucio",
        "comp_whats": "19998507150",
        "comp_nome_social": "Marcos",
        "comp_cpf": "60107524422",
        "comp_nasc": "21/12/1990",
        "comp_email": "fabio.lucio7146@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Ivanete",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Gloria Pimenta",
        "comp_whats": "19990329432",
        "comp_nome_social": "",
        "comp_cpf": "29321808949",
        "comp_nasc": "01/07/1990",
        "comp_email": "gloria.pimenta5478@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "2",
        "extra_integ": "Michele",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Circuito",
        "comp_nome": "Henrique Dias",
        "comp_whats": "19996533163",
        "comp_nome_social": "",
        "comp_cpf": "66043102056",
        "comp_nasc": "28/05/1993",
        "comp_email": "henrique.dias7982@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Andres",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": "Nao sei o que vai aqui",
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Ivone Lacerda",
        "comp_whats": "19996258550",
        "comp_nome_social": "Joao Gabriel",
        "comp_cpf": "11771188235",
        "comp_nasc": "18/08/1991",
        "comp_email": "ivone.lacerda8450@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "5",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Jairo Fonseca",
        "comp_whats": "19990489298",
        "comp_nome_social": "",
        "comp_cpf": "02213145040",
        "comp_nasc": "12/05/1994",
        "comp_email": "jairo.fonseca3405@jhowcass.net",
        "comp_cidade": "3501608",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Ederson",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "1",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Karaoke",
        "comp_nome": "Katia Cilene",
        "comp_whats": "19998907722",
        "comp_nome_social": "",
        "comp_cpf": "44703569132",
        "comp_nasc": "12/04/1995",
        "comp_email": "katia.cilene9906@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Circuito",
        "comp_nome": "Lauro Quevedo",
        "comp_whats": "19997619797",
        "comp_nome_social": "",
        "comp_cpf": "82705690034",
        "comp_nasc": "06/12/1998",
        "comp_email": "lauro.quevedo7544@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": "1",
        "extra_integ": "Heitor",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Monica Guedes",
        "comp_whats": "19990218400",
        "comp_nome_social": "",
        "comp_cpf": "15465864230",
        "comp_nasc": "05/04/1990",
        "comp_email": "monica.guedes1651@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Camilo",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Kpop Solo / Duo",
        "comp_nome": "Nelio Barros",
        "comp_whats": "19994231026",
        "comp_nome_social": "",
        "comp_cpf": "03586651163",
        "comp_nasc": "25/10/2001",
        "comp_email": "nelio.barros7332@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": {
        },
        "extra_estil": {
        },
        "extra_integ": "Joaquin",
        "extra_link_av": "https://www.youtube.com/watch?v=L0_nXyTMyqM",
        "extra_mat": {
        },
        "extra_mod": "2",
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Olga Simões",
        "comp_whats": "19994548020",
        "comp_nome_social": "",
        "comp_cpf": "14737234931",
        "comp_nasc": "05/08/1989",
        "comp_email": "olga.simoes3308@jhowcass.net",
        "comp_cidade": "3509502",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "1",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        },
    },
    {
        "part_event": "1",
        "part_conc": "0",
        "part_conc_nome": "Cosplay Desfile",
        "comp_nome": "Paulo Cezar",
        "comp_whats": "19998930080",
        "comp_nome_social": "",
        "comp_cpf": "72382452994",
        "comp_nasc": "18/07/1994",
        "comp_email": "paulo.cezar4243@jhowcass.net",
        "comp_cidade": "3533403",
        "apres_nome": "Goku",
        "apres_origem": "Dragon Ball Z",
        "apres_link_ref": "https://static.wikia.nocookie.net/tkoc/images/0/09/Goku.png/revision/latest?cb=20130424212620&path-prefix=pt-br",
        "extra_categ": "4",
        "extra_estil": {
        },
        "extra_integ": {
        },
        "extra_link_av": {
        },
        "extra_mat": {
        },
        "extra_mod": {
        }
    }
];

export default competidorSeeder;