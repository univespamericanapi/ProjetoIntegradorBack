export const nota = (sequelize, Sequelize) => {
    const Nota = sequelize.define("notas", {
        nota_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nota_usuario: { // FK para tabela usuario
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nota_part: { // FK para tabela participacao
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nota_jurado: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nota_confec_fig: { // nota confecção - figurino - karaoke
            type: Sequelize.FLOAT,
            defaultValue: 0.00
        },
        nota_fidel_exec: { // nota fidelidade / originalidade - execução
            type: Sequelize.FLOAT,
            defaultValue: 0.00
        },
        nota_interp_pres: { // nota interpretação - presença
            type: Sequelize.FLOAT,
            defaultValue: 0.00
        }
    }, { timestamps: false });

    return Nota;
};