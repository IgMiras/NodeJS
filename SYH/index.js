const express = require("express")
const app = express() // Framework express rodando dentro da variável app
const handlebars = require("express-handlebars")
const Sequelize = require("sequelize") //conexao com Banco de Dados
const bodyParser = require("body-parser")


// Config

    app.use(express.static("public"))
    // Template Engine
        app.engine("handlebars", handlebars.engine({defaultLayout: "main"}))
        app.set("view engine", "handlebars")
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    // Conexão com o Banco de Dados MySQL
        const sequelize = new Sequelize("syh", "root", "igormiras123", {
            host: "localhost",
            dialect: "mysql"
        })
    // Configurando Banco de Dados usuarios
        const Usuario = sequelize.define("usuarios", {
            nome: {
                type: Sequelize.STRING
            },
            sobrenome: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            celular: {
                type: Sequelize.STRING
            }
        })

// Rotas

    app.get("/", function(req, res){
        res.render("SYH", {
            style: "style.css",
            js: "interactive.js",
            icon: "logo.png"
        })
    })

    app.post("/send", function(req, res){
        var Nome = req.body.nome
        var Sobrenome = req.body.sobrenome
        var Email = req.body.email
        var Celular = req.body.celular
        Usuario.create({
            nome: Nome,
            sobrenome: Sobrenome,
            email: Email,
            celular: Celular
        })
        res.redirect("/")
    })


app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081")
}) // Express na porta 8081, deve ser a ultima linha de código!