export const estilo = (sequelize, Sequelize) => {
	const Estilo = sequelize.define(
		'estilos',
		{
			estil_id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			estil_nome: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
		},
		{ timestamps: false }
	);

	return Estilo;
};
