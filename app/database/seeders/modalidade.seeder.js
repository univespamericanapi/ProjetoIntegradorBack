import { modalidadesConstant } from '../../constants/listas.constant.js';

const modalidadeSeeder = async (Modalidade) => {
	console.log('Criando modalidades...');
	for (let modalidade of modalidadesConstant) {
		await Modalidade.create({
			mod_nome: modalidade,
		});
	}
	console.log('Modalidades criadas...');
};

export default modalidadeSeeder;
