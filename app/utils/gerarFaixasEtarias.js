const gerarFaixasEtarias = (idades, quant) => {
    // Ordena o array de idades
    idades.sort((a, b) => a - b);

    // Calcula o intervalo para as faixas etárias
    const min = idades[0];
    const max = idades[idades.length - 1];
    const intervalo = Math.ceil((max - min) / quant);

    // Cria as faixas etárias
    let faixas = [];
    for (let i = 0; i < quant; i++) {
        faixas.push({ min: min + i * intervalo, max: min + (i + 1) * intervalo, idades: [] });
    }

    // Distribui as idades pelas faixas etárias
    idades.forEach(idade => {
        for (let faixa of faixas) {
            if (idade >= faixa.min && idade <= faixa.max) {
                faixa.idades.push(idade);
                break;
            }
        }
    });

    // Garante que todas as faixas tenham pelo menos uma idade
    faixas.forEach((faixa, index) => {
        if (faixa.idades.length === 0) {
            // Move uma idade da faixa anterior ou posterior que tenha mais de um valor
            if (index > 0 && faixas[index - 1].idades.length > 1) {
                faixa.idades.push(faixas[index - 1].idades.pop());
            } else if (index < 6 && faixas[index + 1].idades.length > 1) {
                faixa.idades.push(faixas[index + 1].idades.shift());
            }
        }
    });

    return faixas.map(faixa => ({
        faixaEtaria: `${faixa.min}-${faixa.max}`,
        idades: faixa.idades
    }));
};

export default gerarFaixasEtarias;