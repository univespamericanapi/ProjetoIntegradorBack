import dotenv from 'dotenv';

dotenv.config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env',
});

const config = {
	env: process.env.NODE_ENV,
	segredo: process.env.APP_SECRET,
	jwtExpira: 3600 * 1,
	// jwtExpira: 10 * 1,
	jwtRefreshExpira: 3600 * 8,
	corsOrigin: process.env.CORS_ORIGIN,
	baseUrlEmail: process.env.EMAIL_BASE_URL,
	adminCargoNome: process.env.ADMIN_CARGO_NOME,
	staffNomeCargo: process.env.STAF_CARGO_NOME,
	bancoDeDados: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		dbname: process.env.DB_NAME,
		dialect: process.env.DB_DIALECT,
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	},
	contaAdmin: [
		{
			login: process.env.ADM_LOGIN,
			nome: process.env.ADM_NAME,
			senha: process.env.ADM_PASSWORD,
			cargo: 'admin',
		},
		{
			login: process.env.DEV_LOGIN,
			nome: process.env.DEV_NAME,
			senha: process.env.DEV_PASSWORD,
			cargo: 'admin',
		},
	],
	email: {
		host: process.env.EMAIL_HOST,
		service: process.env.EMAIL_SERVICE,
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	},
	endpointIBGE: process.env.IBGE_ENDPOINT,
};

export default config;
