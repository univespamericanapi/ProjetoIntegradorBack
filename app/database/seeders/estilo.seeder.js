import { estilosConstant } from '../../constants/listas.constant.js';
import { coresLog } from '../../constants/coresLog.constant.js';
import consoleError from '../../utils/consoleError.util.js';

const estiloSeeder = async (Estilo) => {
	console.log(`${coresLog.FgYellow}Criando estilos...${coresLog.Reset}`);
	try {
		for (let estilo of estilosConstant) {
			await Estilo.create({
				estil_nome: estilo,
			});
		}
	} catch (error) {
		consoleError(error);
		throw error;
	}
	console.log(`${coresLog.FgGreen}Estilos criados!${coresLog.Reset}`);
};

export default estiloSeeder;
