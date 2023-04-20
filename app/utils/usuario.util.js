const cargoExibir = async (usuario) => {
    return await usuario.getCargo().then(cargo => {
        return 'ROLE_' + cargo.cargo_nome.toUpperCase();
    });
};

const usuarioUtils = {
    cargoExibir,
}

export default usuarioUtils;