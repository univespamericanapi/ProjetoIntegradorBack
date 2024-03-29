import cargoSeeder from './cargo.seeder.js';
import categoriaSeeder from './categoria.seeder.js';
import usuarioSeeder from './usuario.seeder.js';
import db from '../../models/db.model.js';
import { coresLog } from '../../constants/coresLog.constant.js';
import estiloSeeder from './estilo.seeder.js';
import modalidadeSeeder from './modalidade.seeder.js';
import competidorSeeder from './competidores.seeder.js';
import consoleError from '../../utils/consoleError.util.js';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export const createSeeder = async () => {

	try {
		await db.sequelize
			.sync({ force: true })
			.then(async () => {
				console.log(`${coresLog.FgRed}Removendo e Resincronizando o Banco de Dados...${coresLog.Reset}`);

				await cargoSeeder(db.cargo).then(
					async () => usuarioSeeder(db.usuario, db.cargo)
				);
				await categoriaSeeder(db.categoria);
				await estiloSeeder(db.estilo);
				await modalidadeSeeder(db.modalidade);
				const rl = readline.createInterface({ input, output });
				let resposta = '';
				while (resposta !== 'S' && resposta !== 'N') {
					resposta = (await rl.question('Deseja criar fake data, isso pode demorar um tempo? (S/N) ')).toString().toUpperCase();
					if (resposta === 'S') {
						await competidorSeeder();
					}
				}
			})
			.then(() => {
				console.log(`${coresLog.FgCyan}Finalizado...${coresLog.Reset}`);
			});
	} catch (error) {
		consoleError(error);
		throw error;
	}
};
