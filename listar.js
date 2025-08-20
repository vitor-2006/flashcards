const data = require('./array')
const {rl, askQuestion} = require('./readline')


async function listar() {
    if (data.baralho.length === 0) {
        console.log('Nenhum Baralho cadastrado!');
        return;
    }

    console.log('==== Lista de Baralhos ====\n');

    data.baralho.forEach((baralho, index) => {
        console.log(`${index + 1}. \ntítulo: ${baralho.titulo} \nID: ${baralho.id}\n`);
            
        // Check if there are any flashcards and loop through them
        if (data.flashcard && data.flashcard.length > 0) {
            console.log('  Flashcards:');
            
            // This loop correctly finds and prints flashcards for the current deck
            data.flashcard.forEach((flashcard) => {
                // Now you can directly compare the IDs
                if (flashcard.idBaralho === baralho.id) {
                    console.log(`    - Pergunta: ${flashcard.pergunta}`);
                    console.log(`    - Resposta: ${flashcard.resposta}`);
                    console.log(`    - ID: ${flashcard.id}\n`);
                }
            });
        }
        console.log('');
    });
}

module.exports = listar