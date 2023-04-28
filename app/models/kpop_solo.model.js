export const kpopSolo = (sequelize, Sequelize) => {
	const KpopSolo = sequelize.define(
		'kpop_solo',
		{
			extra_id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			extra_part: {
				// FK para tabela participacao
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			extra_integ: {
				type: Sequelize.TEXT('tiny'),
			},
			extra_mod: {
				// FK para tabela modalidade
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			extra_link_av: {
				type: Sequelize.STRING(250),
				allowNull: false,
			},
		},
		{ timestamps: false }
	);

	return KpopSolo;
};
