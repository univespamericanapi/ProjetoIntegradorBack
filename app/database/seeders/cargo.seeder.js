import { coresLog } from '../../constants/coresLog.constant.js';
import { cargosConstant } from '../../constants/listas.constant.js';
import consoleError from '../../utils/consoleError.util.js';

const cargoSeeder = async (Cargo) => {
	console.log(`${coresLog.FgYellow}Criando cargos...${coresLog.Reset}`);
	try {
		for (let cargo of cargosConstant) {
			await Cargo.create({
				cargo_nome: cargo,
			});
		}
	} catch (error) {
		consoleError(error);
		throw error;
	}
	console.log(`${coresLog.FgGreen}Cargos criados!${coresLog.Reset}`);
};

export default cargoSeeder;
