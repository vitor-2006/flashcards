const data = require('../array');
const { rl, askQuestion } = require('../readline');

async function excluir() {
    console.log('==== Remover Baralho ====\n');

    if (data.baralho.length === 0) {
        console.log('Nenhum baralho cadastrado!');
        return;
    }

    while (true) {
        console.log('Baralhos disponíveis: ');
        data.baralho.forEach((baralho, index) => {
            console.log(`${index + 1}. \ntítulo: ${baralho.titulo} \nID: ${baralho.id}\n`);
            console.log('');
        });

        const input = await askQuestion('Escolha o ID do baralho que deseja remover: ');

        // Find the index of the baralho with the matching ID
        const baralhoIndex = data.baralho.findIndex(baralho => baralho.id == input);

        if (baralhoIndex !== -1) {
            const confirm = await askQuestion('Tem certeza que quer remover o baralho e todos os flashcards associados? (s/n): ');

            if (confirm.toLowerCase() === 's') {
                const baralhoId = data.baralho[baralhoIndex].id;

                // Step 1: Filter out and delete flashcards associated with the baralho
                data.flashcard = data.flashcard.filter(flashcard => flashcard.idBaralho !== baralhoId);
                
                // Step 2: Delete the baralho itself
                const removedBaralho = data.baralho.splice(baralhoIndex, 1);
                
                console.log(`Baralho "${removedBaralho[0].id}" e seus flashcards associados foram removidos com sucesso!!\n`);
                break;
            } else {
                console.log('Baralho não foi removido!');
                break;
            }
        } else {
            console.log('ID inválido! Por favor, digite um ID válido.');
        }
    }
}

module.exports = excluir;