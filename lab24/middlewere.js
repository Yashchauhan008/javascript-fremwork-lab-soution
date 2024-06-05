const express = require('express');
const app = express();

const myMiddleware = (req, res, next) => {
    console.log('Middleware executed.');
    next();
};

app.use(myMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/test', (req, res) => {
    res.send('test!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
