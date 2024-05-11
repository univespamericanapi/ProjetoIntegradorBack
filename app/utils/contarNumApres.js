const contarNumApres = dados => {
    const resultado = [];
    const mapaContagem = dados.reduce((acc, val) => {
        acc[val.num_apres] = (acc[val.num_apres] || 0) + 1;
        return acc;
    }, {});

    for (const num_apres in mapaContagem) {
        resultado.push({ num_apres: parseInt(num_apres), quantidade: mapaContagem[num_apres] });
    }

    return ajustarDados(resultado);
};

function ajustarDados(dados) {
    if (dados.length <= 6) {
        return dados;
    }

    const dadosAjustados = dados.slice(0, 5); // Mantém os primeiros 5 itens
    const somaExcedentes = dados.slice(5) // Soma os itens a partir do sexto
        .reduce((soma, item) => soma + item.quantidade, 0);

    dadosAjustados.push({ num_apres: '6+', quantidade: somaExcedentes });

    return dadosAjustados;
}

export default contarNumApres;