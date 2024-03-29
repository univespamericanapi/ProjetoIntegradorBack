export const apresentacao = (sequelize, Sequelize) => {
	const Apresentacao = sequelize.define(
		'apresentacoes',
		{
			apres_id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			apres_comp: {
				// FK para tabela competidor
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			apres_nome: {
				type: Sequelize.STRING(250),
				allowNull: false,
			},
			apres_origem: {
				type: Sequelize.STRING(250),
				allowNull: false,
			},
			apres_link_ref: {
				type: Sequelize.STRING(250),
				allowNull: true,
			},
			apres_media: {
				// Média das notas
				type: Sequelize.FLOAT,
				defaultValue: 0.0,
			},
		},
		{ timestamps: false }
	);

	return Apresentacao;
};
