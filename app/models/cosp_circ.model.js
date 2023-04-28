export const cospCirc = (sequelize, Sequelize) => {
	const CospCirc = sequelize.define(
		'cosp_circ',
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
			extra_estil: {
				// FK para tabela estilo
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

	return CospCirc;
};
