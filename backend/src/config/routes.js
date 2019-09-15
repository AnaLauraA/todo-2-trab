//cria uma instancia do express - servidor HTTP
const express = require('express')
//executa uma função e retorna o resultado desta
//a função recebe como parametro a instancia de um servidor
module.exports = function(server) {
    //cria instancia das rotas da API
    const router = express.Router()
    //configura o servidor para responder a API/api
    server.use('/api', router)
    //cria instancia que representa os metodos GET, POST, PUT e DELETE
    //estes metodos estao associados ao esquema TODO
    const carService = require('../api/car/carService')
    //registra a rota/todos
    //então, na verdade teremos a api/api/todos pronta para ser executada 
    //localhost:3003/api/todos - get, post, put e delete
    carService.register(router, '/cars')
}