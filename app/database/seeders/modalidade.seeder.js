import { modalidadesConstant } from '../../constants/listas.constant.js';
import { coresLog } from '../../constants/coresLog.constant.js';
import consoleError from '../../utils/consoleError.util.js';

const modalidadeSeeder = async (Modalidade) => {
	console.log(`${coresLog.FgYellow}Criando modalidades...${coresLog.Reset}`);
	try {
		for (let modalidade of modalidadesConstant) {
			await Modalidade.create({
				mod_nome: modalidade,
			});
		}
	} catch (error) {
		consoleError(error);
		throw error;
	}
	console.log(`${coresLog.FgGreen}Modalidades criadas!${coresLog.Reset}`);

};

export default modalidadeSeeder;
