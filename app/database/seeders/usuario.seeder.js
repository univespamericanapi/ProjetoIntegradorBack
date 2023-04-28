import config from '../../config/config.js';
import bcrypt from 'bcryptjs';

const usuarioSeeder = async (Usuario, Cargo) => {
	await Cargo.findOne({
		where: {
			cargo_nome: config.contaAdmin.cargo,
		},
	}).then(async (cargo) => {
		await Usuario.create({
			usuario_login: config.contaAdmin.login,
			usuario_senha: bcrypt.hashSync(
				config.contaAdmin.senha,
				8
			),
			usuario_nome: config.contaAdmin.nome,
			usuario_cargo: 1,
		});
	});
	console.log('Criando usuário...');
};

export default usuarioSeeder;
