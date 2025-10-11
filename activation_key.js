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


// Importar módulo express-handlebars
// const{ engine } = require('express-handlebars');


const express = require('express');

const mysql = require('mysql2');

const app = express();

// MySQL Connection
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'plugin_elinsz'
});

// Example route
app.get('/activate', (req, res) => {
    // Handle activation logic here
    res.render('activation_keys');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

