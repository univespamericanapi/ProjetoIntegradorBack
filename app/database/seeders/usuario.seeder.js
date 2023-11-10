import config from '../../config/config.js';
import bcrypt from 'bcryptjs';
import consoleError from '../../utils/consoleError.util.js';
import { coresLog } from '../../constants/coresLog.constant.js';

const usuarioSeeder = async (Usuario, Cargo) => {
	console.log(`${coresLog.FgYellow}Criando usuários...${coresLog.Reset}`);
	try {
		for (let user of config.contaAdmin) {
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
		}
	} catch (error) {
		consoleError(error);
		throw error;
	}
	console.log(`${coresLog.FgGreen}Usuários criados!${coresLog.Reset}`);
};

export default usuarioSeeder;
