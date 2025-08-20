const {rl, askQuestion} = require('./readline')
const cadastrar = require('./cadastrar')
const atualizar = require('./atualizar')
const listar = require('./listar')
const excluir = require('./excluir')
const excluirFlash = require('./excluirFlash')
const buscaFlash = require('./buscaFlash')

async function exibirMenuAsync() {
    
    // We use a 'while' loop to keep the menu running until the user decides to exit.
    let continuar = true;
    while (continuar) {
        console.log("qual opção você vai usar?: \n1 -> Cadastrar baralho e flashcards\n2 -> Exibir baralho e flashcards \n3 -> Editar baralho e flashcards \n4 -> Remover baralho \n5 -> Remover flashcards \n6 -> Buscar flashcards \n7 -> Fechar programa\n");
        // Here we 'await' the user's input, making the code synchronous-looking.
        const input = await askQuestion("escolha a opção: ");
        const op = parseInt(input);

        switch (op) {
            case 1:
                await cadastrar();
                break;
            case 2:
                await listar();
                break;
            case 3:
                await atualizar();
                break;
            case 4:
                await excluir();
                break;
            case 5:
                await excluirFlash()
                break
            case 6:
                await buscaFlash()
            case 7:
                console.log('até mais!');
                rl.close();
                // Set 'continuar' to false to exit the loop.
                continuar = false;
                break;
            default:
                console.log('Operação inválida! Tente novamente');
                // The loop will automatically display the menu again.
                break;
        }
    }
}

// Call the async function to start the program.
exibirMenuAsync();