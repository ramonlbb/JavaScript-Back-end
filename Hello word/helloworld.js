const expressFramework = require('express');
const appInstance = expressFramework();
const serverPort = 8080;

// Define uma rota para a raiz do servidor
appInstance.get('/', (request, response) => {
    response.send('Hello World');
});

// Inicia o servidor na porta especificada
appInstance.listen(serverPort, () => {
    console.log(`http://localhost:${serverPort}`);
});
