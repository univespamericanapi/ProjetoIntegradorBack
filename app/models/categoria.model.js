export const categoria = (sequelize, Sequelize) => {
	const Categoria = sequelize.define(
		'categorias',
		{
			categ_id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			categ_nome: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
		},
		{ timestamps: false }
	);

	return Categoria;
};
