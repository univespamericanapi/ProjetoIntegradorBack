import { cargosConstant } from "../../constants/listas.constant.js";

const cargoSeeder = async (Cargo) => {
    cargosConstant.forEach(async cargo => {
        await Cargo.create({
            cargo_nome: cargo
        });
    });
    console.log("Criando cargos...");
};

export default cargoSeeder;