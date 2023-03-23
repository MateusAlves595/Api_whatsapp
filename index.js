const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const contatos = require('./modulo/functions.js')
const {json} = require('body-parser')
const { request } = require('http')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    //Permite definir quais métodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()
})

app.get('/v1/whatsapp/profile/id/:id', cors(), async function(request, response, next){
    let statusCode
    let dadosPerfil = {}
    let perfil = request.params.id

    if(perfil == '' || perfil == undefined || perfil < 1 || perfil > 4 ||perfil.length != 1 || isNaN(perfil)){
        statusCode = 400
        dadosPerfil.message = 'Não foi possivel processar pois os dados de entrada (id) que foram enviados não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos,'
    }else{
        
        let contato = contatos.getPerfil(perfil)

        if(contato){
            statusCode = 200
            dadosPerfil = contato
        }else{
            statusCode = 404
        }
    }
    
    response.status(statusCode)
    response.json(dadosPerfil)

})

app.listen(8080, function(){
    console.log('servidor aguardando requisições na porta 8080.')
})