import { modalidadesConstant } from "../../constants/listas.constant.js";

const modalidadeSeeder = async (Modalidade) => {
    modalidadesConstant.forEach(async modalidade => {
        await Modalidade.create({
            mod_nome: modalidade
        });
    });
    console.log("Criando modalidades...");
};

export default modalidadeSeeder;