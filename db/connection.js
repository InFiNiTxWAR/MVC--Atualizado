const {Sequelize} = require('sequelize') //importando a classe "Sequelize"

const sequelize = new Sequelize(
    'biblioteca', 'root', '',{host:'localhost',dialect:'mysql'}) //Criando o objeto "Sequelize"

try{
    sequelize.authenticate()
    console.log("Conectado com sucesso")
}catch(error){
    console.log(`Falha ao conectar: ${error}`)
}
