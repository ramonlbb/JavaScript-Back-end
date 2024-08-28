const expressFramework = require('express');
const appInstance = expressFramework();
const serverPort = 8080;


appInstance.get('/', (request, response) => {
    response.send('Hello World');
});


appInstance.listen(serverPort, () => {
    console.log(`http://localhost:${serverPort}`);
});
