Node version:
    v16.17.0

NPM version:
    8.15.0

Arquitetura baseada nos padrões da Clean Architecture
    domain      -> domínio do produto: classes que devem ser "inteligentes"
    usecases    -> possuem as regras de negócio do sistema
    controller  -> invocam os usecasses e fazem o I/O do sistema
    infra       -> infraestrutura do sistema

Para rodar:
    -> Verificar as versões do node/npm;
    -> Executar o comando "npm install";
    -> Executar o comando "npm run server";
    -> Como adicional, pode-se importar o arquivo da pasta "postman" para o Postman, a fim de testar a única rota presente
        neste projeto.