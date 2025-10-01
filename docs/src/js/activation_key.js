    // document.getElementById("activateButton").addEventListener("click", function() {
    //     let key = document.getElementById("activationKey").value;

    //     if (key.trim() === "") {
    //         document.getElementById("message").innerText = "Por favor, insira uma chave!";
    //         return;
    //     }

    //     fetch("http://localhost:3306/activate", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ key: key })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         document.getElementById("message").innerText = data.message;
    //         if (data.success) {
    //             document.getElementById("message").style.color = "green";
    //             setTimeout(() => {
    //                 window.location.href = "login.html"; // Redireciona após ativação
    //             }, 2000);
    //         }
    //     })
    //     .catch(error => console.error("Erro na ativação:", error));
    // });

//========================================================================//

// Importar módulo express
const express = require('express');

// Importar módulo express-handlebars
    const{ engine } = require('express-handlebars');

// Importar Módulo MySql
const MySql = require('mysql2');




// Configuração de Conexão
const conexao = MySql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'plugin_elinsz'

});

// Rota Principal
app.get('/', function(req, res){
    res.render('formulario');
});
