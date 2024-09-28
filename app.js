import express from "express";
const routes = require("./src/routes");

const app = express();
const port = process.env.PORT || 4568;

routes(app);

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
});

module.exports = app;