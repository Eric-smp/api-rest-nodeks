Criando uma API REST utilizando o node 

Irei utilizar o Fastify como microframework parecido com o express

O fastify é muito mais bem mantido que o express, com mais updates e um time mais ativo do que o express

//Talvez utilizando o Bun e o Deno como gerenciado de pacote, é usado outros tipos de comando já que ele aceita o ts de forma nativa

//Esse comando você consegue visualizar a rota pelo próprio terminal
http localhost:3333/

//Uma biblioteca onde o node consegue fazer leitura do .env
npm i dotenv 


//Biblioteca utilizada para validação de dados para variveis de ambiente
npm i zod   


//Comando para baixar o eslint da rocketseat
npm i eslint @rocketseat/eslint-config -D 


//Cookies -> Formas de manter contexto entre requisições




//TIPOS DE TESTE
// 1# Teste unitários: Testa uma pequena parte de forma totalmente isolada
// 2# Teste Integração: Quando você testa a comunicação entre duas ou mais unidades
// 3# Teste end-to-end(ponta a ponta): Teste que simulam um usuário operando na nossa aplicação 


// Pirâmide de teste: E2E (não dependem de nenhuma tecnologia, não dependem de arquitetura)
// 











COMANDO:

npm init -y

//O comando abaixo é para se caso eu queria utilizar uma engenner que não tenha o typescript de forma nativa igual o Bun ou o Deno 
npm i -D typescript 

// O comando npx é um comando binario de código executaveis da nossa pastas. Como por exemplo o ./node_modules/.bin/tsc. Npx cria um atalho
npx tsc --init     


//Código usado para instalar o microframework
npm i fastify 

//Como o Node foi usado para suportar javaScript, se quisermos usar o typescript devemos instalar na dependencias de desenvolvimento o @types/Node
npm install -D @types/node 

//Esse comando abaixo ele tranforma o arquivo ts em js
npx tsc src/server.js


//Esse comando abaixo ajuda a rodar aplicação ts sem precisar ficar criando o arquivo em js
npm install tsx -D



//sqlite é um banco SQL relacional 
//Estratégias de conexão com o banco de dados 
//1# drivers nativos: ferramentas e bibliotecas de baixo nivo faz com que a gente se comunique com o banco de uma maneira mais detalhada
//2# Query builders: umas forma mais fácil sem ter que aprender muito sobre sql, o mais famoso é o Knex.js. A sintaxe pode ser reaproveitado em outros banco de dados
//3# ORMS um nivel de abstração deixando muito mais fácil




//Aqui estou instalando tanto a ferramenta knex como o banco de dados que estou usando que no caso é o knex
npm install knex sqlite3


//Mostra os comandos disponivel no knex
npx knex -h 

//Com esse comando é criado uma migrate para fazer uma alteração que deve ser feita no banco de dados
npx knex migrate:make create-<nomedamigrate>


//Como estamos utilizando o TSX em de uma forma que não é aceita pelo node de forma nativa temos que apelar para alguns atalhos para que fique mais fácil a utilizando
//Então devemos criar um script no package.json
  "knex": "node --import tsx ./node_modules/.bin/knex",
//Esse comando acima, você consegue acessa a pasta binaria do knex e utilizar o seus comando
//Antes era utilizado o --loader no lugar do --import, por conta das nova atualização do node js, e é essa a forma de identificar o tsx

//Com o package.json configurado podemos criar a migrate com esse comando abaixo?
npm run knex -- migrate:make create-<nomedamigrate>


//O comando abaixo é executado quando você configura a migrate e quer rodar ela
npm run knex -- migrate:latest        


//Uma migrate já enviada e está com o restante do time não pode ser mais modificada
//Caso tenha alguma coisa de errado deve ser criado uma outra migrate 

//Caso você não tenha enviado, porém não está com seu time nem em produção. Pode ser usado um comando 
npm run knex -- migrate:rollback
//Nesse comando você consegue parar a migrate e ajustar oque precisa


//Para utilizar a funcionalidade de cookie com o fastify precisa baixar o pacote de cookie do fastify
npm i @fastify/cookie


//Comando para baixar o vitest como depedencia de desenvolvimento
npm i vitest -D    

//
npm i supertest -D 

//Ferramenta utilizada para transforma TS em JS
npm i tsup -D



# DEPLOY
//Nessa aplicação, vou utilizar o Render para fazer o deploy
