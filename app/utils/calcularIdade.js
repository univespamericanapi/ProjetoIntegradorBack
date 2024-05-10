const calcularIdade = (dataNascimento) => {
    const dataNasc = new Date(dataNascimento);

    const dataAtual = new Date();

    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();

    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();

    if (dataNasc.getMonth() > mesAtual || (dataNasc.getMonth() === mesAtual && dataNasc.getDate() > diaAtual)) {
        idade--;
    }

    return idade;
};

export default calcularIdade;