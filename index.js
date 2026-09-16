const express = require('express')
const exphb = require('express-handlebars')

const app = express()

const connection = require('./db/connection')
const Livro = require('./model/Livro')

//Cria a comunicação entre o html e o MVC
app.engine('handlebars', exphb.engine())
app.set('view engine','handlebars')

app.use(
    express.urlencoded({extended:true})
)
/*Configuração para usar o JSON e acessar a pasta public
na pasta public teremos css, html e etc*/
app.use(express.json())
app.use(express.static('public'))

connection.sync().then(()=>{
    app.listen(3000)
}).catch((error)=>console.log(error))