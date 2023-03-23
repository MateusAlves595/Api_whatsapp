var listaContatos = require('./contatos.js')

const getPerfil = function (id) {
    let idContato = id
    let novoJson = {}
    let status = false

    listaContatos.contatos['whats-users'].forEach(dadosPerfil => {
        if(dadosPerfil.id == idContato){
            novoJson = dadosPerfil.contacts
            status = true
        }
    });

    if(status == true){
        return novoJson
    } else{
        return status
    }
}

module.exports = {
    getPerfil
}