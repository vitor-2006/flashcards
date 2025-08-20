const data = require('./array');
const { rl, askQuestion } = require('./readline');

async function excluirFlash() {
    console.log('==== Remover Flashcard ====\n');

    if (data.flashcard.length === 0) {
        console.log('Nenhum Flashcard cadastrado!');
        return;
    }

    while (true) {
        console.log('Flashcards disponíveis: ');
        data.flashcard.forEach((flash, index) => {
            // Corrected: Access properties directly from the 'flash' object
            console.log(`Flashcard #${index + 1}. \npergunta: ${flash.pergunta} \nresposta: ${flash.resposta} \nID ${flash.id} \nID do baralho: ${flash.idBaralho}\n`);
            console.log('');
        });

        const input = await askQuestion('Escolha o ID do flashcard que deseja remover: ');

        const index = data.flashcard.findIndex(flash => flash.id == input);

        if (index !== -1) {
            const confirm = await askQuestion('Tem certeza que quer remover o flashcard? (s/n): ');
            if (confirm.toLowerCase() === 's') {
                const removedFlashcard = data.flashcard.splice(index, 1);
                console.log(`Flashcard "${removedFlashcard[0].id}" removido com sucesso!!\n`);
                break;
            } else {
                console.log('flashcard não foi removido!');
                break;
            }
        } else {
            console.log('ID inválido! Por favor, digite um ID válido.');
        }
    }
}

module.exports = excluirFlash;