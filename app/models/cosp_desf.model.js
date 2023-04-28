export const cospDesf = (sequelize, Sequelize) => {
	const CospDesf = sequelize.define(
		'cosp_desf',
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
			extra_categ: {
				// FK para tabela categoria
				type: Sequelize.INTEGER,
				allowNull: false,
			},
		},
		{ timestamps: false }
	);

	return CospDesf;
};
