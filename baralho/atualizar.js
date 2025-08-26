const data = require('../array')
const {rl, askQuestion} = require('../readline')
const listar = require('../listar')
const atualizarFlash = require('../atualizarFlash')

async function atualizar() {
    while (true) {
        if (data.baralho.length === 0) {
            console.log('Nenhum Baralho cadastrado!');
            return;
        }

        console.log('==== Atualizar Baralho ====\n');
        await listar()

        const input = await askQuestion('Digite o ID do baralho que você quer editar: ');
        const index = data.baralho.findIndex(baralho => baralho.id == input);

        if (index !== -1) {
            console.log(`\nEditando o Baralho #${index + 1}...`);

            // Check if user wants to update the name
            const editName = await askQuestion('Deseja editar o título? (s/n): ');
            if (editName.toLowerCase() === 's') {
                const nome = await askQuestion('Digite o novo título: ');
                data.baralho[index].nome = nome;
            }

            // Call the telefone function to manage phones
            await atualizarFlash(index);

            console.log(`Baralho #${index + 1} editado com sucesso!`);

            const resposta = await askQuestion('Deseja editar outro? (s/n): ');
            if (resposta.toLowerCase() !== 's') {
                break;
            }
        } else {
            console.log('ID inválido!\n');
        }
    }
}

module.exports = atualizar