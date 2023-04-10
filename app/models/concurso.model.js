export const concurso = (sequelize, Sequelize) => {
    const Concurso = sequelize.define("concursos", {
        concur_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        concur_nome: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, { timestamps: false });

    return Concurso;
};