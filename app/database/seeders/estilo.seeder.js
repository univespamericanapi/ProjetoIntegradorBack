import { estilosConstant } from '../../constants/listas.constant.js';

const estiloSeeder = async (Estilo) => {
	estilosConstant.forEach(async (estilo) => {
		await Estilo.create({
			estil_nome: estilo,
		});
	});
	console.log('Criando estilos...');
};

export default estiloSeeder;
