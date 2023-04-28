import cargoSeeder from './cargo.seeder.js';
import categoriaSeeder from './categoria.seeder.js';
import cidadeSeeder from './cidade.seeder.js';
import estadoSeeder from './estado.seeder.js';
import usuarioSeeder from './usuario.seeder.js';
import db from '../../models/db.model.js';
import { coresLog } from '../../constants/coresLog.constant.js';
import estiloSeeder from './estilo.seeder.js';
import modalidadeSeeder from './modalidade.seeder.js';

export const createSeeder = async () => {
	await db.sequelize
		.sync({ force: true })
		.then(async () => {
			console.log('Removendo e Resincronizando o Banco de Dados');

			await cargoSeeder(db.cargo);
			await estadoSeeder(db.estado);
			await cidadeSeeder(db.cidade, db.estado);
			await categoriaSeeder(db.categoria);
			await estiloSeeder(db.estilo);
			await modalidadeSeeder(db.modalidade);
			await usuarioSeeder(db.usuario, db.cargo);
		})
		.then(() => {
			console.log(`${coresLog.FgCyan}Finalizado...${coresLog.Reset}`);
		});
};
