const mysql = require('mysql2'); // Importa o pacote mysql2

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: "localhost",   // Endereço do servidor MySQL
    user: "root",        // Usuário do banco de dados
    password: "",        // Senha do banco (nesse caso, está vazia)
    database: "plugin_elinsz" // Nome do banco de dados
});

// Estabelece a conexão
connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        return;
    }
    console.log("Conexão bem-sucedida ao banco de dados 'plugin_elinsz'!");
});

// Exemplo: Consultar uma tabela no banco de dados
connection.query('SELECT * FROM sua_tabela', (err, results) => {
    if (err) {
        console.error("Erro ao executar a query:", err);
        return;
    }
    console.log("Resultados da consulta:", results);
});

// Fecha a conexão
connection.end();
