import { estilosConstant } from '../../constants/listas.constant.js';

const estiloSeeder = async (Estilo) => {
	console.log('Criando estilos...');
	for (let estilo of estilosConstant) {
		await Estilo.create({
			estil_nome: estilo,
		});
	}
	console.log('Estilos criados...');
};

export default estiloSeeder;
