const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const path = require("path")

// Config

    app.use(express.static(path.join(__dirname, "public")));
    // Template Engine
    app.engine("handlebars", handlebars.engine({defaultLayout: "main"}))
    app.set("view engine", "handlebars")

// Rotas

    app.get("/", function(req, res){
        res.render("tela_principal", {
            style: "tela_principal.css",
            js: "interactive.js",
            icon: "dado.png"
        })
    })

app.listen(8082, function(){
    console.log("Server rodando na porta 8082!")
})