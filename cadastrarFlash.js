const data = require('./array')
const {rl, askQuestion} = require('./readline')

async function cadastrarFlash(idBaralhoAtual) {
    let SorN = 's';
    while (SorN.toLowerCase() === 's') {
        let pergunta = await askQuestion('Digite a pergunta do flashcard: ');
        let resposta = await askQuestion('Digite a resposta do flashcard: ');
        let id = data.idFlash;

        const novoFlash = {
            pergunta,
            resposta,
            id,
            idBaralho: idBaralhoAtual // Use the ID that was passed in
        };

        data.idFlash++;
        data.flashcard.push(novoFlash);
        console.log('Flashcard registrado com sucesso!');
        SorN = await askQuestion('Deseja cadastrar outro flashcard? (s/n): ');
    }
    return;
}

module.exports = cadastrarFlash