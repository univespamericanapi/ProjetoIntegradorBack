export const competidor = (sequelize, Sequelize) => {
	const Competidor = sequelize.define(
		'competidores',
		{
			comp_id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			comp_usua: {
				// FK para a tabela usuários
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			comp_email: {
				type: Sequelize.STRING(500),
				allowNull: true,
			},
			comp_email_verif: {
				// Has the email been verified?
				type: Sequelize.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
			comp_nome: {
				type: Sequelize.STRING(500),
				allowNull: false,
			},
			comp_nome_social: {
				type: Sequelize.STRING(500),
				allowNull: false,
			},
			comp_cpf: {
				type: Sequelize.STRING(11),
				allowNull: false,
			},
			comp_nasc: {
				type: Sequelize.DATEONLY,
				allowNull: false,
			},
			comp_whats: {
				type: Sequelize.STRING(11),
				allowNull: false,
			},
			comp_cidade: {
				// FK para a tabela cidades
				type: Sequelize.INTEGER,
				allowNull: false,
			},
		},
		{ timestamps: false }
	);

	return Competidor;
};
