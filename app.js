/* Crie uma apliação em NodeJS que faça o seguinte:

* Peça o caminho de um arquivo txt do seu computador; **** OK ****
* Leia o arquivo; **** OK ****
* Conte quantas linhas possuem somente números e some os números destas linhas; **** OK ****
* - Conte quantas linhas possuem texto; **** OK ****

*  Exiba um resumo com:
*   - suma dos números dentro deste arquivo; **** OK ****
*   - Quantas linhas continham texto (se tiver texto e número na mesma linha deverá contar aqui); **** OK ****
*   - Quanto tempo demorou a execução; **** OK ****

* - O resumo deverá ser disparado por EVENTO **** OK ****

* - A leitura do arquivo deverá ser feita de forma assíncrona; **** OK ****
* - Pergunte se deseja executar novamente. **** OK ****
*/

const fs = require('fs');
const EventEmitter = require('events');
const readline = require('readline');

const reader = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

const eventEmitter = new EventEmitter();

function isNumber(str) {
   // Verifica se a linha contém apenas números (inclui ponto decimal)
   return /^\d+(\.\d+)?$/.test(str.trim());
}

eventEmitter.on('yes', async () => {
   reader.question("Informe o caminho do arquivo: ", async (filePath) => {
      console.time("Tempo de Execução");

      try {
         const data = await fs.promises.readFile(filePath, 'utf8'); // Leitura assíncrona do arquivo
         let sum = 0;
         let linesWithNumber = 0;
         let linesWithText = 0;

         const lines = data.split('\n');
         lines.forEach(line => {
            const content = line.trim();
            if (content === '') return;

            if (isNumber(content)) {
               sum += parseFloat(content);
               linesWithNumber++;
            } else {
               linesWithText++;
            }
         });

         console.log("Resumo:");
         console.table({
            'sum dos números': sum,
            'Linhas com texto': linesWithText,
            'Linhas com números': linesWithNumber
         });
      } catch (err) {
         console.error("Erro ao ler o arquivo, caminho ou arquivo inválido.");
      } finally {
         console.timeEnd("Tempo de Execução");
         appStart(); // Chama novamente a função para perguntar se o usuário deseja repetir
      }
   });
});

eventEmitter.on('exit', () => {
   console.log("Programa encerrado!");
   reader.close();
});

function appStart() {
   reader.question("Gostaria de ler um arquivo? 1-Sim, qualquer outra tecla - Não: ", (response) => {
      if (response == '1') {
         eventEmitter.emit('yes');
      } else {
         eventEmitter.emit('exit');
      }
   });
}

appStart();
