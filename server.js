import express, { json, urlencoded } from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import db from './app/models/db.model.js';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './docs/swagger.json' assert { type: 'json' };
import config from './app/config/config.js';
import { coresLog } from './app/constants/coresLog.constant.js';
import indexRoutes from './app/routes/index.route.js';
import consoleError from "./app/utils/consoleError.util.js";

const app = express();

// Configuração do aplicativo
app.use(
	cors({
		origin: config.corsOrigin,
	})
);
console.log(
	`${coresLog.FgYellow}Conectado no banco de dados em: ${coresLog.FgGreen}${config.corsOrigin}.${coresLog.Reset}`
);
app.use(json());
app.use(
	urlencoded({
		extended: true,
	})
);

// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get('/', (req, res) => {
	res.json({
		message: 'Bem vindo a Avalon Concursos - API de gerancimento de concursos.',
	});
});

// Rotas
indexRoutes(app);

// Executando na porta
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

// Conexão com o banco de dados
conectarAoBanco();

// In production, use this code
async function conectarAoBanco() {
	try {
		await db.sequelize.authenticate();
		console.log('Conexão estabelicida com sucesso.');

		await db.sequelize.sync();
		console.log(
			`${coresLog.FgGreen}Todos os modelos foram sincronizados com sucesso.${coresLog.Reset}`
		);
		console.log(
			`${coresLog.FgYellow}Conectado no banco de dados em: ${coresLog.FgGreen}${process.env.DB_HOST}.${coresLog.Reset}`
		);
	} catch (error) {
		consoleError('Não foi possível se conectar ao banco de dados:', error);
	}
}

export const handler = serverless(app);
