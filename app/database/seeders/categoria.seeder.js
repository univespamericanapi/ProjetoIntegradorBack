import { coresLog } from '../../constants/coresLog.constant.js';
import { categoriasConstant } from '../../constants/listas.constant.js';
import consoleError from '../../utils/consoleError.util.js';

const categoriaSeeder = async (Categoria) => {
	console.log(`${coresLog.FgYellow}Criando categorias...${coresLog.Reset}`);
	try {
		for (let categoria of categoriasConstant) {
			await Categoria.create({
				categ_nome: categoria,
			});
		}
	} catch (error) {
		consoleError(error);
		throw error;
	}
	console.log(`${coresLog.FgGreen}Categorias criadas!${coresLog.Reset}`);
};

export default categoriaSeeder;
