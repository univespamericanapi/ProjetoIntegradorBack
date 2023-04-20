import { concursosConstant } from "../../constants/listas.constant.js";

const concursoSeeder = async (Concurso) => {
    concursosConstant.forEach(async concurso => {
        await Concurso.create({
            concur_nome: concurso
        });
    });
    console.log("Criando concursos...");
};

export default concursoSeeder;