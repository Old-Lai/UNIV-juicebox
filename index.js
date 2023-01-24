const PORT = 3000;
const express = require('express');
const server = express();
const apiRouter = require('./api');
const morgan = require('morgan');
const {client} = require('./db');

server.use(morgan('dev'));
server.use(express.json());

server.use('/api', apiRouter);

server.use('/api', (req, res, next) => {
    console.log("A request was made to /api");
    next();
  });
  
server.get('/api', (req, res, next) => {
console.log("A get request was made to /api");
res.send({ message: "success" });
});

// server.get('/background/:color', (req, res, next) => {
//   res.send(`
//     <body style="background: ${ req.params.color };">
//       <h1>Hello World</h1>
//     </body>
//   `);
// });

// server.get('/add/:first/to/:second', (req, res, next) => {
//   res.send(`<h1>${ req.params.first } + ${ req.params.second } = ${
//     Number(req.params.first) + Number(req.params.second)
//    }</h1>`);
// });

client.connect();

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});