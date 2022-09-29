function tempoAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function delay(acao, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof acao !== "string") {
            reject("Valor incorreto!");
        } else {
            setTimeout(() => {
                resolve(acao);
            }, tempo);
        }
    });
}

delay("Conexão com BD", tempoAleatorio(1, 3))
    .then((resposta) => {
        console.log(resposta);
        return delay("Busca de dados na tabela X", tempoAleatorio(1, 3));
    })
    .then((resposta) => {
        console.log(resposta);
        return delay("Atualização da instância Y", tempoAleatorio(1, 3));
    })
    .then((resposta) => {
        console.log(resposta);
    })
    .then(() => {
        console.log("Atualização realizada com sucesso!");
    })
    .catch((e) => {
        console.log("ERRO: ", e);
    });

// ● Implemente as seguintes funções que simulam uma integração com um banco de dados:
//      ○ Conectar ao banco
//      ○ Buscar dados de uma tabela
//      ○ Atualizar uma instância da tabela
// ● Utilize Promises para invocar as funções implementadas de forma assíncrona, utilizando as formas vistas na aula de hoje: then() e async/await
// ● Faça a entrega via Moodle dos arquivos .js implementados
