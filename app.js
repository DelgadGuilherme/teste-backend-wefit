const db = require('./src/models');
import express from "express";

const app = express();

const port = process.env.PORT || 4568;

app.get("/ping", (req, res) => {
    return res.send("pong");
});

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
});

db.sequelize.authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });