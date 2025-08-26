const data = require('../array')
const {rl, askQuestion} = require('../readline')
const cadastrarFlash = require('../cadastrarFlash')

async function cadastrar() {
    let resposta = 's';
    while (resposta.toLowerCase() === 's') {

        let titulo = await askQuestion('Digite o título do baralho: ');
        let idBaralhoAtual = data.idGen; // Store the current ID before incrementing

        const novoBaralho = {
            titulo,
            id: idBaralhoAtual // Use the stored ID
        };

        data.baralho.push(novoBaralho);
        console.log('Baralho registrado com sucesso!');

        // Pass the current baralho ID to the flashcard registration function
        await cadastrarFlash(idBaralhoAtual);

        data.idGen++;
        resposta = await askQuestion('Deseja cadastrar outro baralho? (s/n): ');
    }
    return;
}

module.exports = cadastrar