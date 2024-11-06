# Leitor de Arquivo TXT com Node.js
Esta aplicação em Node.js permite ler e analisar arquivos .txt com praticidade, fornecendo um resumo detalhado sobre o conteúdo numérico e textual presente no arquivo.

Funcionalidades
Leitura Assíncrona: A aplicação lê o arquivo de forma assíncrona, otimizando o desempenho e proporcionando uma experiência rápida.
Contagem e Soma de Números: Identifica linhas contendo apenas números, somando todos os valores encontrados.
Identificação de Linhas com Texto: Conta as linhas que contêm texto, incluindo aquelas com uma combinação de texto e números.
Medição de Tempo de Execução: Exibe o tempo total de execução da leitura e análise do arquivo.
Interatividade com o Usuário: Pergunta ao usuário se ele deseja processar um novo arquivo ou encerrar a aplicação.
Como Usar

Clone o repositório:
git clone https://github.com/seu-usuario/nome-do-repositorio.git

Instale as dependências:
npm install

Execute a aplicação:
node app.js

Informe o caminho de um arquivo .txt e veja o resumo gerado.
Exemplo de Saída

#Resumo:
| Soma dos números       | 12345           |
| Linhas com texto       | 10              |
| Linhas com números     | 5               |
Tempo de execução: 25 ms

#Tecnologias
Node.js
Módulo fs para leitura de arquivos
Módulo readline para interação com o usuário
EventEmitter para disparo de eventos assíncronos

#Licença
Este projeto é distribuído sob a licença MIT. Sinta-se à vontade para contribuir!
