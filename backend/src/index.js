const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://bryan:bryan123@cluster0.4lgvh.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);



server.listen(3333);







// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros :

// Query params: request.query (Filtros, Ordenaçao, Paginaçao)
// Route params: request.param (Identifar um recurso na alteraçao ou remoçao )
// Body: request.body(Sao dados para a criaçao ou alteraçao de um registro)

//MongoDB (Nao-relacional)