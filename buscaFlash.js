const data = require('./array');
const { askQuestion } = require('./readline');

async function buscaFlash() {
    console.log('==== Buscar Flashcard ====\n');

    if (data.flashcard.length === 0) {
        console.log('Nenhum flashcard cadastrado!');
        return;
    }

    const busca = await askQuestion('Qual flashcard você quer ver? Digite o ID ou a pergunta: ');

    // Use .find() to locate the flashcard by ID or by question.
    // .find() returns the flashcard object itself or 'undefined' if not found.
    const foundFlashcard = data.flashcard.find(flashcard => 
        flashcard.id == busca || flashcard.pergunta.toLowerCase() === busca.toLowerCase()
    );

    if (foundFlashcard) {
        console.log('\nFlashcard encontrado!\n');
        console.log(`ID: ${foundFlashcard.id}`);
        console.log(`Pergunta: ${foundFlashcard.pergunta}`);
        console.log(`Resposta: ${foundFlashcard.resposta}`);
        console.log(`ID do baralho: ${foundFlashcard.idBaralho}\n`);

        return
    } else {
        console.log('Nenhum flashcard encontrado com essa busca.');

        return
    }
}

module.exports = buscaFlash;