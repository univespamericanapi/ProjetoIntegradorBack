import config from '../../config/config.js';
import bcrypt from 'bcryptjs';

const usuarioSeeder = async (Usuario, Cargo) => {
	config.contaAdmin.forEach(async (user) => {
		await Cargo.findOne({
			where: {
				cargo_nome: user.cargo,
			},
		}).then(async (cargo) => {
			await Usuario.create({
				usuario_login: user.login,
				usuario_senha: bcrypt.hashSync(user.senha, 8),
				usuario_nome: user.nome,
				usuario_cargo: cargo.cargo_id,
			});
		});
	});
	console.log('Criando usuário...');
};

export default usuarioSeeder;
