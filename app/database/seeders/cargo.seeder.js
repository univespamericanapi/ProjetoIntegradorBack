import { cargosConstant } from '../../constants/listas.constant.js';

const cargoSeeder = async (Cargo) => {
	console.log('Criando cargos...');
	for (let cargo of cargosConstant) {
		await Cargo.create({
			cargo_nome: cargo,
		});
	}
	console.log('Cargos criados...');
};

export default cargoSeeder;
