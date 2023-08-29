const estadoSeeder = async (Estado) => {
	console.log('Criando estados...');
	await Estado.create({
		est_sigla: 'AC',
		est_desc: 'Acre',
	});
	await Estado.create({
		est_sigla: 'AL',
		est_desc: 'Alagoas',
	});
	await Estado.create({
		est_sigla: 'AP',
		est_desc: 'Amapá',
	});
	await Estado.create({
		est_sigla: 'AM',
		est_desc: 'Amazonas',
	});
	await Estado.create({
		est_sigla: 'BA',
		est_desc: 'Bahia',
	});
	await Estado.create({
		est_sigla: 'CE',
		est_desc: 'Ceará',
	});
	await Estado.create({
		est_sigla: 'DF',
		est_desc: 'Distrito Federal',
	});
	await Estado.create({
		est_sigla: 'ES',
		est_desc: 'Espírito Santo',
	});
	await Estado.create({
		est_sigla: 'GO',
		est_desc: 'Goiás',
	});
	await Estado.create({
		est_sigla: 'MA',
		est_desc: 'Maranhão',
	});
	await Estado.create({
		est_sigla: 'MT',
		est_desc: 'Mato Grosso',
	});
	await Estado.create({
		est_sigla: 'MS',
		est_desc: 'Mato Grosso do Sul',
	});
	await Estado.create({
		est_sigla: 'MG',
		est_desc: 'Minas Gerais',
	});
	await Estado.create({
		est_sigla: 'PA',
		est_desc: 'Pará',
	});
	await Estado.create({
		est_sigla: 'PB',
		est_desc: 'Paraíba',
	});
	await Estado.create({
		est_sigla: 'PR',
		est_desc: 'Paraná',
	});
	await Estado.create({
		est_sigla: 'PE',
		est_desc: 'Pernambuco',
	});
	await Estado.create({
		est_sigla: 'PI',
		est_desc: 'Piauí',
	});
	await Estado.create({
		est_sigla: 'RJ',
		est_desc: 'Rio de Janeiro',
	});
	await Estado.create({
		est_sigla: 'RN',
		est_desc: 'Rio Grande do Norte',
	});
	await Estado.create({
		est_sigla: 'RS',
		est_desc: 'Rio Grande do Sul',
	});
	await Estado.create({
		est_sigla: 'RO',
		est_desc: 'Rondônia',
	});
	await Estado.create({
		est_sigla: 'RR',
		est_desc: 'Roraima',
	});
	await Estado.create({
		est_sigla: 'SC',
		est_desc: 'Santa Catarina',
	});
	await Estado.create({
		est_sigla: 'SP',
		est_desc: 'São Paulo',
	});
	await Estado.create({
		est_sigla: 'SE',
		est_desc: 'Sergipe',
	});
	await Estado.create({
		est_sigla: 'TO',
		est_desc: 'Tocantins',
	});
	console.log('Estados criados...');
};

export default estadoSeeder;
