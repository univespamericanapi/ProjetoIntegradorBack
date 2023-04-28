export const participacao = (sequelize, Sequelize) => {
	const Participacao = sequelize.define(
		'participacoes',
		{
			part_id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			part_event: {
				// FK para tabela evento
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			part_conc: {
				// FK para tabela concurso
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			part_apres: {
				// FK para tabela apresentacao
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			part_checkin: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			part_ordem: {
				type: Sequelize.INTEGER,
			},
			part_aceit_regul: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			part_status: {
				// Campo para controle dos organizadores
				type: Sequelize.STRING(250),
			},
			part_obs: {
				// Campo para controle dos organizadores
				type: Sequelize.TEXT('medium'),
			},
			part_extra: {
				// Campo para controle dos organizadores
				type: Sequelize.STRING(250),
			},
			part_tipo_inscr: {
				// Campo de controle das inscrições Inscrição direta ou fila de espera
				type: Sequelize.ENUM,
				values: ['Inscrição', 'Espera'],
			},
		},
		{ timestamps: false }
	);

	return Participacao;
};
