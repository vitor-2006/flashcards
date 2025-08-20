const data = require('./array');
const { rl, askQuestion } = require('./readline');

async function atualizarFlash(index) {
    console.log('==== Atualizar Flashcard ====\n');

    // Loop through the flashcards
    for (let i = 0; i < data.flashcard.length; i++) {
        // Check if the current flashcard's idBaralho matches the index passed to the function
        if (data.flashcard[i].idBaralho === data.baralho[index].id) {

            // Use the loop index (i) to access the correct flashcard data
            console.log(`Flashcard #${i + 1}. \npergunta: ${data.flashcard[i].pergunta} \nresposta: ${data.flashcard[i].resposta} \nID ${data.flashcard[i].id} \nID do baralho: ${data.flashcard[i].idBaralho}`);
            
            console.log(`\nEditando o Flashcard #${data.flashcard[i].id}...`);

            const editPergunta = await askQuestion('Deseja editar a pergunta? (s/n): ');
            if (editPergunta.toLowerCase() === 's') {
                const pergunta = await askQuestion('Digite a nova pergunta: ');
                data.flashcard[i].pergunta = pergunta;
            }

            const editResposta = await askQuestion('Deseja editar a resposta? (s/n): ');
            if (editResposta.toLowerCase() === 's') {
                const resposta = await askQuestion('Digite a nova resposta: ');
                data.flashcard[i].resposta = resposta;
            }
        }
    }
}

module.exports = atualizarFlash;