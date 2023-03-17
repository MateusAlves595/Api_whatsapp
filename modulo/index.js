const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const contatos = require('../modulo/contatos.js')
const {json} = require('body-parser')
const { request } = require('http')

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    //Permite definir quais métodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()
})